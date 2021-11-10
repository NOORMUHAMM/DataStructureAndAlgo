const mongoose = require('mongoose');
const OttSchema = new mongoose.Schema(
  {
    Ott_name: { type: String, required: true },
    director: { type: String, required: true },
    release_date: { type: String, required: true },
    rating: { type: Number, required: true },
    gener: { type: String, required: true },
    episode_no: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
const Ott=mongoose.model("ott",OttSchema);
module.exports=Ott;