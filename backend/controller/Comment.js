
import Comment from "../modal/Comment.js"

export const createCommentById = async(req,res) => {
let data = req.body;
let comment = new Comment(data);
let save = await comment.save();
if(!save) return res.status(500).json("Internal Server Error");
return res.status(200).json(save);

}


export const getcommentbyid = async (req, res) => {
    try {
        const id = req.params.id;
        const comments = await Comment.find({ video: id })
            .populate('user') // Populate the 'user' field with selected fields
            .populate('video') // Populate the 'video' field with selected fields
            .exec();

        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json('Internal Server Error');
    }
}
