import React,{useState} from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const Register = () => {
 
   const navigate  = useNavigate();

   const [value, setValue] = useState({username:"", password:""})

   const handleSubmit = async(e) =>{
    e.preventDefault();
      try {
        await axios.post("http://localhost:4000/api/auth/register",value,{withCredentials:true})
        toast("user registerd")
        navigate("/login");
      } catch (error) {
        if(error.response?.status === 401) toast("user already exist")
        else  toast("user not registered")
      }
   }
  return (
    <div> 
         <h1>Register</h1>

         <div>
            <form action="" onSubmit={handleSubmit}>
                 <input type="text" placeholder='username' onChange={(e) => setValue({...value, username:e.target.value})}/>
                 <input type="text" placeholder='password' onChange={(e) => setValue({...value, password:e.target.value})}/>
                 <button>Submit</button>
            </form>
         </div>
    </div>
  )
}

export default Register