import jwt from 'jsonwebtoken';

const me = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: "No token provided" });

    // Verify token
    const decoded = jwt.verify(token, 'your_secret_key');
    console.log(decoded)
    res.status(200).json({ username: decoded.username });
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

export default me;
