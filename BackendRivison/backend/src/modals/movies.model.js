const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
  movie_name: { type: String, required: true },
  director: { type: String, required: true },
  release_date: { type: String, required: true },
  rating:{type:Number,required:true},
  gener:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});
const Movies=mongoose.model("movies",MovieSchema);
module.exports=Movies;