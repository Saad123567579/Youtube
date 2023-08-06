import express from "express";
import mongoose from "mongoose";
import cors from "cors"; 
import cookieParser from "cookie-parser"; 
import videoRouter from "./router/Video.js";
import commentRouter from "./router/Comment.js";
import authRouter from "./router/Auth.js";
import userRouter from "./router/User.js";
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());


app.use(cookieParser());
app.use("/user",userRouter)
app.use("/video",videoRouter)
app.use("/comment",commentRouter)
app.use("/auth",authRouter)



let url = "mongodb+srv://saady:429331@cluster0.azmorz9.mongodb.net/Youtube";
const connect = () => {
    mongoose.connect(url).then(()=>console.log("Database Connected"))
    .catch(()=>console.log("Error in connecting to the database"))
}
connect();
app.listen(8080,()=>{
    console.log("Server Started")
})
