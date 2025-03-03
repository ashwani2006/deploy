import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
   <>
     <div>
          <ul>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/register"}>Register</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/logout"}>logout</NavLink></li>
          </ul>
     </div>
   </>
  )
}

export default Navbar