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

export const getVideoById = async (req, res) => {
    console.log('Request received with ID:', req.params.id);

    try {
        const video = await Video.findById(req.params.id);
        console.log('Video found:', video);

        if (!video) {
            console.log('Video not found');
            return res.status(404).json("Not found");
        }

        return res.status(200).json(video);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json("Internal Server Error");
    }
};


