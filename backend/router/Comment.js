import express from "express";
import {createCommentById,getcommentbyid} from "../controller/Comment.js"; 
const router = express.Router();

router.post('/createcomment',createCommentById);
router.get('/getcommentbyid/:id',getcommentbyid);

export default router;
