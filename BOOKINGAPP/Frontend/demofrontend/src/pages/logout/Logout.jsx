import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout actions
        dispatch({ type: "LOGOUT" });
        // Redirect to the login page after logout
        navigate("/login");
    }, [dispatch, navigate]);

    return (
        <div>
            <p>Logging out...</p>
            {/* You can add a loading spinner or any other message here */}
        </div>
    );
};

export default Logout;
