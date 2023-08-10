
import User from "../modal/User.js";

export const Subscribe = async (req, res) => {
    // try {
        let channelId = req.body.channelId;
        let userId = req.body.userId;

        // Find the user by their ID and update the subscribedChannels array
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { subscribedChannels: channelId } },
            { new: true } // This option returns the updated document
        );

        if (!user) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json(user);
    // } catch (error) {
    //     console.error("Error subscribing:", error);
    //     return res.status(500).json("Internal server error");
    // }
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