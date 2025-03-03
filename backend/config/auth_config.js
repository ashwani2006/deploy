import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();



const connectDB = ()=>{
    try {
        mongoose.connect(process.env.URI);
        console.log("Database connected")
    } catch (error) {
        console.log("Database not connected")
    }
}

export default connectDB;