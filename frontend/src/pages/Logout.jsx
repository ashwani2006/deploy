import React from 'react'
import axios from "axios"
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate = useNavigate();
    const handleLogout = async()=>{
       try {
        await axios.post("http://localhost:4000/api/auth/logout",{},{withCredentials:true});
        toast("user logout successfully🖐️🖐️");
        navigate("/login")
       } catch (error) {
        toast.error("error || logout");
       }
    }

  return (
    <div>
        <h1>Logout🖐️🖐️🖐️</h1>

        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;