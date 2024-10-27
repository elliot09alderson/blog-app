import { Schema } from "mongoose";
import mongoose from "mongoose";
const socialMediaAccountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    dp: { type: String, required: true },
    password: { type: String, required: true },
    socials: { type: [socialMediaAccountSchema], default: [] },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
