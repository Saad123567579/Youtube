import Video from "../modal/Video.js"

export const createVideo = async(req,res) => {
const data = req.body;
let video = new Video(data);
let s = await video.save();
if(!s) return res.status(500).json("Internal Server Error");
console.log(s);
return res.status(200).json("video uploaded");
}

export const getAllVideo = async(req,res) => {
    const data = await Video.find();
    if(!data) return res.status(404).json('Not Found');
    return res.status(200).json(data);

}

