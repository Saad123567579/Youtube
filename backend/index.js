import express from "express";
import mongoose from "mongoose";


const app = express();

























let url = "mongodb+srv://saady:429331@cluster0.azmorz9.mongodb.net/Youtube";
const connect = () => {
    mongoose.connect(url).then(()=>console.log("Database Connected"))
    .catch(()=>console.log("Error in connecting to the database"))
}
connect();
app.listen(8080,()=>{
    console.log("Server Started")
})
