import express from "express";
// import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"
import {createVideo,getAllVideo,getVideoById,incrementViews,revert , update} from "../controller/Video.js"
const router = express.Router();

router.post('/createvideo',createVideo);
router.get('/getallvideo',getAllVideo);
router.get('/getvideobyid/:id',getVideoById);
router.post('/incrementviews/:id',incrementViews);
router.post('/revert',revert);
router.post('/update',update)
export default router;
