import { Link } from "react-router-dom"
import "./navbar.css"
import SignUp from "../../pages/signup/SignUp"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  
  const {user} = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to ="/" style={{color:"inherit" , textDecoration:"none"}}>
        <span className="logo">BOOKMYSTAY</span>
        </Link> 
        {user ? user.username : ( <div className="navItems">
          <Link to={"/register"}>
          <button className="navButton">Sign Up</button>
          </Link>
          <Link to={"/login"}>
          <button className="navButton">Login</button>
          </Link>
          <div>
            {/* Conditionally render the logout button if the user is logged in */}
            {user ? ( 
                <Link to="/logout">
                    <button className="logoutButton">LOGOUT</button>
                </Link>
            ) : null}
        </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar