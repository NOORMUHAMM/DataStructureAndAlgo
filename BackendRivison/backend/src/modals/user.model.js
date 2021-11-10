const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_email: { type: String, required: true },
    user_password: { type: String, required: true },
    confirm_password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const User=mongoose.model("user",userSchema);
module.exports=User;