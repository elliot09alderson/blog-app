import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";
import { blogRouter } from "./routes/blogRoutes.js";
const app = express();

dotenv.config({ path: "/src" });
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);

connectDB()
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
