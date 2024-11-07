const express=require("express");
const app=express()
const cors=require("cors");
app.use(cors())
require("dotenv").config();
const connectDB = require("./config/db");
const userRoute=require("./routes/userRoutes")
app.use(express.json())
connectDB();
app.use("/bms/users",userRoute)
app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is running on port ",process.env.PORT);
})