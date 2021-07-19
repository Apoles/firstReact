import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  email: String,
  name: String,
  description: String,
});

const Post = mongoose.model("Posts", postSchema);
export default Post;
