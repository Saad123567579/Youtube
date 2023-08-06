import express from "express";
import mongoose from "mongoose";
const userRouter = require("./router/User");
const videoRouter = require("./router/Video");
const commentRouter = require("./router/Comment");

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());


app.use(cookieParser());
app.use("/user",userRouter.router)
app.use("/video",videoRouter.router)
app.use("/comment",commentRouter.router)


let url = "mongodb+srv://saady:429331@cluster0.azmorz9.mongodb.net/Youtube";
const connect = () => {
    mongoose.connect(url).then(()=>console.log("Database Connected"))
    .catch(()=>console.log("Error in connecting to the database"))
}
connect();
app.listen(8080,()=>{
    console.log("Server Started")
})
