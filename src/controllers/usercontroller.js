import User from "../models/user.js";
import bcrypt from "bcryptjs";
export async function myProfile(req, res, next) {
  res.send("hii");
}
export async function createUser(req, res, next) {
  const { username, email, dp, password, socials } = req.body;
  const salt = await bcrypt.genSalt(10);
  const encPass = await bcrypt.hash(password, salt);
  try {
    const newUser = await User.create({
      username,
      email,
      dp,
      password: encPass,
      socials,
      role: "admin",
    });
    const data = { ...newUser.deleteOne(password) };
    res.json({
      success: true,
      message: "user created successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
}
export async function getAnyUserDetails(req, res, next) {}
