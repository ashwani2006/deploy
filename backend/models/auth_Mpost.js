import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    username:{type:String, required:true},
    image:{type:String},
    caption:{type:String},
    createdAt:{type:Date, default:Date.now}
})

const Post = new mongoose.model("Post", postSchema);

export default Post;