import Post from "../models/auth_Mpost.js";

const getp = async(req, res) =>{
    try {
       const posts = await Post.find().sort({createdAT: -1});
       
       res.status(200).json(posts);
       
    } catch (error) {
       
       res.status(500).json({msg:"error || fetching posts"})

    }
}

export default getp; 