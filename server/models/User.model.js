const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String },
    admin: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
