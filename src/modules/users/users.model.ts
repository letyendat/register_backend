import mongoose from "mongoose";
import IUser from "./users.interface";
const { ObjectId } = require("mongoose").Types;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model<IUser & mongoose.Document>("user", UserSchema)

export default User