
import express from "express";
import {Signup,Login,Logout,Getuser} from "../controller/Auth.js"; // Assuming the controller file is named "User.js"

const router = express.Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post("/logout",Logout);
router.get("/getuser",Getuser);


export default router;
