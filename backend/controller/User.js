
import User from "../modal/User.js";
import Video from "../modal/Video.js";

export const Subscribe = async (req, res) => {
    try {
        let channelId = req.body.channelId;
        let userId = req.body.userId;
        let user = await User.findById(userId);
        if (!user) return res.status(500).json("Internal Server Error");
        let user2 = await User.findById(channelId);
        if (!user2) return res.status(500).json("Internal Server Error")
        if (user.subscribedChannels.includes(channelId) && user2.subscribedMe.includes(userId)) return res.status(200).json("Already Subscribed");
        else {
            const u1 = await User.findByIdAndUpdate(
                userId,
                { $push: { subscribedChannels: channelId } },
                { new: true } // This option returns the updated document
            );
            if (!u1) return res.status(500).json("Internal Server Error");

            const u2 = await User.findByIdAndUpdate(
                channelId,
                { $push: { subscribedMe: userId } },
                { new: true }
            )
            if (!u2) return res.status(500).json("Internal Server Error");
            return res.status(200).json("Done");

        }
    } catch (e) { return res.status(500).json("Internal Server Error") }
};

export const Unsubscribe = async (req, res) => {
    try {
        let channelId = req.body.channelId;
        let userId = req.body.userId;

        let user = await User.findById(userId);
        if (!user) return res.status(500).json("Internal Server Error");

        let channel = await User.findById(channelId);
        if (!channel) return res.status(500).json("Internal Server Error");

        if (!user.subscribedChannels.includes(channelId) || !channel.subscribedMe.includes(userId)) {
            return res.status(200).json("Not Subscribed");
        }

        const u1 = await User.findByIdAndUpdate(
            userId,
            { $pull: { subscribedChannels: channelId } },
            { new: true }
        );
        if (!u1) return res.status(500).json("Internal Server Error");

        const u2 = await User.findByIdAndUpdate(
            channelId,
            { $pull: { subscribedMe: userId } },
            { new: true }
        );
        if (!u2) return res.status(500).json("Internal Server Error");

        return res.status(200).json("Unsubscribed successfully");
    } catch (error) {
        console.error("Error unsubscribing:", error);
        return res.status(500).json("Internal Server Error");
    }
};
// u need a userid , video id , 
export const Like = async (req, res) => {
    try {
        let userId = req.body.userId;
        let videoId = req.body.videoId;
        let user = await User.findById(userId);
        if (!user) return res.status(404).json("User Not Found");
        if (user.likeVids.includes(videoId)) return res.status(200).json("Already Liked");
        let update = await User.findByIdAndUpdate(userId,
            { $push: { likeVids: videoId } },
            { new: true }
        )
        if (!update) return res.status(500).json("Internal Server Error");
        let updateview = await Video.findByIdAndUpdate(
            videoId,
            { $inc: { likes: 1 } },
            { new: true }
        );
        if (!updateview) return res.status(500).json("Internal Server Error");
        return res.status(200).json("Done");
    } catch (e) { res.status(500).json("Internal Server Error"); }

}


export const Save = async (req, res) => {
    try {
        let userId = req.body.userId;
        let videoId = req.body.videoId;
        let user = await User.findById(userId);
        if (!user) return res.status(404).json("User Not Found");
        if (user.watchlaterVids.includes(videoId)) return res.status(200).json("Already Saved");
        let update = await User.findByIdAndUpdate(userId,
            { $push: { watchlaterVids: videoId } },
            { new: true }
        )
        if (!update) return res.status(500).json("Internal Server Error");

        return res.status(200).json("Done");
    } catch (e) { res.status(500).json("Internal Server Error"); }

}

export const getLikedVideos = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
            .populate({
                path: "likeVids",
                populate: {
                    path: "createdby",
                    model: "User" // Replace with the correct model name for the createdBy field
                }
            })
            .exec();

        if (!data) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching liked videos:", error);
        return res.status(500).json("Internal Server Error");
    }
};

export const getsavedVideos = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
            .populate({
                path: "watchlaterVids",
                populate: {
                    path: "createdby",
                    model: "User" // Replace with the correct model name for the createdBy field
                }
            })
            .exec();

        if (!data) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching liked videos:", error);
        return res.status(500).json("Internal Server Error");
    }
};

export const getsubscribedChannels = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
            .populate('subscribedChannels')
            .exec();

        if (!data) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching liked videos:", error);
        return res.status(500).json("Internal Server Error");
    }
};


  export const getMyVideos = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
            .populate({
                path: "myVids",
                populate: {
                    path: "createdby",
                    model: "User" // Replace with the correct model name for the createdBy field
                }
            })
            .exec();

        if (!data) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching liked videos:", error);
        return res.status(500).json("Internal Server Error");
    }
};

