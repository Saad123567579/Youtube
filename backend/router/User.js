import express from "express";
// import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"
import {Subscribe,Unsubscribe,Like,Save,getLikedVideos,getsavedVideos,getMyVideos,getsubscribedChannels} from "../controller/User.js";
const router = express.Router();

router.post('/subscribe', Subscribe);
router.post('/unsubscribe',Unsubscribe);
router.post('/like',Like);
router.post('/save',Save);
router.get('/getlikedvideos/:id',getLikedVideos);
router.get('/getsavedvideos/:id',getsavedVideos);
router.get('/getmyvideos/:id',getMyVideos);
router.get('/getsubchannels/:id',getsubscribedChannels);
export default router;
