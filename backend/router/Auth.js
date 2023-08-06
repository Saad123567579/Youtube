import express from "express";
import {testabc} from "../controller/Auth.js"; // Assuming the controller file is named "User.js"

const router = express.Router();

router.post('/test', testabc);


export default router;
