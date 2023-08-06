// commentModel.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title:{type:String},
  thumbnail:{type:String},
  link:{type:String},
  likes:{type:Number},
  dislikes:{type:Number},
  comments:{ type: [mongoose.Schema.Types.ObjectId], ref: 'Comment'},
  createdAt: { type: Date, default: Date.now }, 

  // other comment properties...
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
