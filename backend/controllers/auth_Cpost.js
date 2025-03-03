import Post from "../models/auth_Mpost.js";

const post = async (req, res) => {
  const { image, caption } = req.body;
  // const username = req.headers.username;

  // Debug logs
  console.log("Received Image:", image ? "Yes" : "No");
  console.log("Received Username:", username);

  if (!image || !username) {
    return res.status(400).json({ msg: "Image and username are required!" });
  }

  try {
    await Post.create({ username, image, caption });
    res.status(201).json({ msg: "Photo uploaded successfully!" });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ msg: "Error uploading photo" });
  }
};


export default post;