// Import Mongoose
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/006/487/912/small_2x/hacker-avatar-ilustration-free-vector.jpg" },
    password:{type:String},
    likeVids: { type: [mongoose.Schema.Types.ObjectId], ref: 'Video' },
    myVids: { type: [mongoose.Schema.Types.ObjectId], ref: 'Video' },
    watchlaterVids: { type: [mongoose.Schema.Types.ObjectId], ref: 'Video' },
    subscribedChannels: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    subscribedMe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: { type: [mongoose.Schema.Types.ObjectId], ref: 'Comment' },
    createdAt: { type: Date, default: Date.now }, 
});

// Create and export the User model
export default mongoose.model('User', userSchema);





