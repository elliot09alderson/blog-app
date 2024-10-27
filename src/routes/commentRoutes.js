import express from "express";
const userRouter = express.Router();
userRouter.post("/post/:id", createComment);
