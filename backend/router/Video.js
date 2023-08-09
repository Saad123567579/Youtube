import express from "express";
// import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"
import {createVideo,getAllVideo} from "../controller/Video.js"
const router = express.Router();

router.post('/createvideo',createVideo);
router.get('/getallvideo',getAllVideo);

export default router;
