import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  // ✅ Fetch username
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/auth/me', { withCredentials: true });
        setUsername(res.data.username);
      } catch (err) {
        console.error("Not logged in or invalid token");
        setUsername('Guest');
      }
    };

    fetchUser();
  }, []);

  // ✅ Fetch all posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/auth/getp");
      setPosts(res.data);
    } catch (error) {
      alert("Error fetching posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ✅ Convert image to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please choose an image!");
  
    try {
      await axios.post(
        "http://localhost:4000/api/auth/post",
        {
          username,
          caption,
          image, // Base64 string
        },
        {
          headers: {
            "Content-Type": "application/json",
            "username":username,
          },
        
        },
        {
          withCredentials:true,
        },
      );
  
      alert("Post uploaded successfully!");
     
    } catch (error) {
      
      alert("Error uploading post");
    }
  };
  

  return (
    <div>
      {/* 📸 Upload Section */}
      <div>
        <h1>Hello, {username}! Post your photo</h1>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button onClick={handleUpload}>Upload Post</button>
        </div>
      </div>

      <hr />

      {/* 🖼️ Display All Posts */}
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No photos yet. Be the first to upload!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.username}</h3>
            <img src={post.image} alt="post" width="300" />
            {post.caption && <p>{post.caption}</p>}
            <small>{new Date(post.createdAt).toLocaleString()}</small>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
 