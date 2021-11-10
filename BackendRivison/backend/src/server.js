const express=require("express");
const connect=require("./config/db")
const app=express()

app.use(express.json())
const MoviesRoute = require("./controler/novies.controller");
app.use("/movie",MoviesRoute);
const OttRoute=require("./controler/Ott.controller");
app.use("/series",OttRoute)
const UserRouter=require("./controler/user.controller")
app.use("/signup",UserRouter)
app.listen(3000,async()=>{
    await connect();
    console.log("Listening on port 3000")
})