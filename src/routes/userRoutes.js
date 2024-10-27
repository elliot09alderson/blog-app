import express from "express";
import {
  createUser,
  getAnyUserDetails,
  myProfile,
} from "../controllers/usercontroller.js";
export const userRouter = express.Router();
userRouter.get("/me", myProfile);
userRouter.post("/", createUser);
userRouter.post("/:id", getAnyUserDetails);
