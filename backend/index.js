import express from "express" 
import router from "./routers/auth_routers.js";
import connectDB from "./config/auth_config.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const app = express();
// ✅ Increase payload size limit to 50MB
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
     origin:"http://localhost:5173",
     credentials:true,
}))
// ✅ Manually Set CORS Headers (Some Browsers Need This)
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "http://localhost:5173");
     res.header("Access-Control-Allow-Credentials", "true");
     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
     res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
     next();
   });
app.use(cookieParser());
app.use("/api/auth/",router);


connectDB();
app.listen((process.env.PORT), ()=>{
     console.log("server is running")
} )