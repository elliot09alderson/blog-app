import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogDetails,
  getUserBlogs,
} from "../controllers/blogController.js";
export const blogRouter = express.Router();

blogRouter.post("/", createBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/user/:id", getUserBlogs);
blogRouter.get("/:id", getBlogDetails);
