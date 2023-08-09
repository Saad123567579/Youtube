// commentModel.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title:{type:String},
  thumbnail:{type:String},
  link:{type:String},
  likes:{type:Number,default:0},
  dislikes:{type:Number,default:0},
  comments:{ type: [mongoose.Schema.Types.ObjectId], ref: 'Comment'},
  createdAt: { type: Date, default: Date.now }, 
  createdBy:{type:Object},
  views:{type:Number,default:0}   
  

  // other comment properties...
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
