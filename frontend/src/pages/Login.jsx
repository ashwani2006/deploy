import React,{useState,} from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
   const [value, setValue] = useState({username:"", password:""});

   const navigate = useNavigate()
   const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
         await axios.post("http://localhost:4000/api/auth/login",value,{withCredentials:true})
         toast("user logged in successfully")
         navigate("/home")
      } catch (error) {
        if(error.response?.status === 401)  toast.error("username not found😫")
        else if(error.response?.status === 402) toast.error("password is invalid")
        else  toast.error("logged in error")
      }
   }

  return (
    <div>
        <h1>login</h1>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={(e) => setValue({...value, username:e.target.value})}/>
            <input type="text" placeholder='password' onChange={(e) => setValue({...value, password:e.target.value}) }/>
            <button>Loggedin</button>
        </form>
    </div>
  )
}

export default Login