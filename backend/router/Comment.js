import express from "express";
import {} from "../controller/User.js"; // Assuming the controller file is named "User.js"

const router = express.Router();

router.post('/createuser', createUser);


export default router;
