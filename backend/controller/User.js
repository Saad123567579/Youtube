
import User from "../modal/User.js";
// import Video from "../modal/Video.js";

export const Subscribe = async (req, res) => {
    try {
        let channelId = req.body.channelId;
        let userId = req.body.userId;
        let user = await User.findById(userId);
        if(!user) return res.status(500).json("Internal Server Error");
        let user2 = await User.findById(channelId);
        if(!user2) return res.status(500).json("Internal Server Error")
        if(user.subscribedChannels.includes(channelId) && user2.subscribedMe.includes(userId)) return res.status(200).json("Already Subscribed");
        else {
            const u1 = await User.findByIdAndUpdate(
            userId,
            { $push: { subscribedChannels: channelId } },
            { new: true } // This option returns the updated document
        );
        if(!u1) return res.status(500).json("Internal Server Error");

        const u2 = await User.findByIdAndUpdate(
            channelId,
            { $push: { subscribedMe: userId } },
            { new: true }
        )
        if(!u2) return res.status(500).json("Internal Server Error");
        return res.status(200).json("Done");

        }
    }catch(e){return res.status(500).json("Internal Server Error")}
};

export const Unsubscribe = async (req, res) => {
    // try {
        let channelId = req.body.channelId;
        let userId = req.body.userId;

        // Find the user by their ID and update the subscribedChannels array
        const user = await User.findByIdAndUpdate(
            userId,
            { $pull: { subscribedChannels: channelId } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Unsubscribed successfully", user });
    // } catch (error) {
    //     console.error("Error unsubscribing:", error);
    //     return res.status(500).json({ message: "Internal server error" });
    // }
};