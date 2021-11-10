const express=require("express");
const Ott=require("../modals/Ott.model");
const router=express.Router();
router.post("/",async(req,res)=>{
    const OttSeries=await Ott.create(req.body);
    res.status(201).json({OttSeries})
})
router.get("/",async(req,res)=>{
    const OttSeries=await Ott.find().lean().exec()
    res.status(200).json({OttSeries})
})
router.get("/:id",async(req,res)=>{
    const OttSeries=await Ott.findById(req.params.id).lean().exec()
     res.status(200).json({ OttSeries });
})
router.patch("/:id",async(req,res)=>{
    const OttSeries=await Ott.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    }).lean().exec()
     res.status(200).json({ OttSeries });
})
router.delete("/:id", async (req, res) => {
  const OttSeries = await Ott.findByIdAndDelete(req.params.id)
  res.status(200).json({ OttSeries });
});
module.exports=router;