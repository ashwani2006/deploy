import express from "express" 
import register from "../controllers/auth_Cregister.js";
import login from "../controllers/auth_Clogin.js";
import logout from "../controllers/auth_Clogout.js";
import me from "../controllers/auth_Cme.js";
import post from "../controllers/auth_Cpost.js";
import getp from "../controllers/auth_Cget.js";


const router = express();


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/me").get(me)
router.route("/post").post(post)
router.route("/getp").get(getp)


export default router;