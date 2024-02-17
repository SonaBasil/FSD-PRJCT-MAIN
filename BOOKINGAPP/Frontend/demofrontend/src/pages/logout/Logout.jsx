import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function from the AuthContext
    logout();
    // Redirect the user to the login page or another appropriate location
    navigate("/login");
  };

  // Only render the logout button if the user is logged in
  return (
    user && <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
