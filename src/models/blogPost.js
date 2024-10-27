const blogPostSchema = new Schema(
  {
    headline: { type: String, required: true },
    subheading: { type: String, required: true },
    newsImg: [{ type: String }],
    para1: { type: String, required: true },
    para2: { type: String },
    para3: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
export default BlogPost;
