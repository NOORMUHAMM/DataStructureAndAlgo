const express=require("express");
const router=express.Router();
const User=require("../modals/user.model")
router.post("/",async(req,res)=>{
    const users=await User.create(req.body);
    res.status(201).json({users})
})
module.exports=router;