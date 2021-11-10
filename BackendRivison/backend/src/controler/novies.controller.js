const express=require("express");
const movies=require("../modals/movies.model")
const router=express.Router();

router.post("/",async(req,res)=>{
    const movie=await movies.create(req.body)
    return res.status(201).json({movie})
})
router.get("/",async(req,res)=>{
    const movie=await movies.find().lean().exec();
    res.status(200).json({movie})
})
router.get("/:id",async(req,res)=>{
    const movie=await movies.findById(req.params.id).lean().exec();
    res.status(200).json({movie})
})
router.patch("/:id",async(req,res)=>{
    const movie=await movies.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    }).lean().exec();
    res.status(200).json({movie})
})
router.delete("/:id",async(req,res)=>{
    const movie=await movies.findByIdAndDelete(req.params.id);
    res.status(200).json({movie})
})
module.exports=router;