import express from "express";
// import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"
import {Subscribe,Unsubscribe,Like} from "../controller/User.js";
const router = express.Router();

router.post('/subscribe', Subscribe);
router.post('/unsubscribe',Unsubscribe);
router.post('/like',Like);

export default router;
