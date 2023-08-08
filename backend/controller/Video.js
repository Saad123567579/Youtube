import Video from "../modal/Video.js"

export const createVideo = async(req,res) => {
const data = req.body;
let video = new Video(data);
let s = await video.save();
if(!s) return res.status(500).json("Internal Server Error");
console.log(s);
return res.status(200).json("video uploaded");
}