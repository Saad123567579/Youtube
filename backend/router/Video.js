import express from "express";
// import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"
import {createVideo} from "../controller/Video.js"
const router = express.Router();

router.post('/createvideo',createVideo);

export default router;
