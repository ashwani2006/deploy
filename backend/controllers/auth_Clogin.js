import User from "../models/auth_models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const login = async(req, res) =>{
    try {

        const {username, password} = req.body;

        // user check the exist or not
        const userEx = await User.findOne({username});
        if(!userEx)  return res.status(401).json({msg:"username not found😫"});

        // compare the password using bcrypt_js
        const passValid = await bcrypt.compare(password, userEx.password);
        if(!passValid)  return  res.status(402).json({msg:"password is invalid"})

        // token genrated
        const token = jwt.sign({id:userEx._id, username:userEx.username}, 'your_secret_key');
        
        // send the token on cookies in cliet_side
        res.cookie("token",token,{httpOnly:true, secure:false});


        res.status(200).json({msg:"login successfully 🤞🤞"})
    } catch (error) {
        res.status(400).json({msg:"error || in login page B"})
    }
}

export default login;