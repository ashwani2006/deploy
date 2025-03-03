import User from "../models/auth_models.js";
import bcrypt from "bcryptjs"

const register = async(req, res) =>{
    try {
        const {username, password} = req.body;

        // check the user exist or not 
        const userEx  = await User.findOne({username});
        if(userEx)  return res.status(401).json({msg:"user is already exist"})

        // password hashing with bcrypt_js
        const hashed_ps =  await bcrypt.hash(password, 10);
        await User.create({username, password:hashed_ps});

        res.status(200).json({msg:"Registration successfully💝"})
    } catch (error) {
        res.status(400).json({msg:"error  ||  in register page"})
    }
}

export default register;