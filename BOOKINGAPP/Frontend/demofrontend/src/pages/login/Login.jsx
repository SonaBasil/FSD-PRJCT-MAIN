import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async e => {
        // e.preventDefault();
        dispatch ({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
            navigate("/")
        } catch(err) {
            dispatch({type: "LOGIN_FAILURE", payload:err.response.data});
        }
    };


    

    return (
        <div className="login">
            <div className="lContainer">
                <h2>LOGIN</h2>
                <input type="text"
                    placeholder="Username" 
                    id="username" 
                    onChange={handleChange}
                    className="lInput" />
                <input type="password" 
                    placeholder="Password"
                    id="password" 
                    onChange={handleChange} 
                    className="lInput" />
                <button disabled={loading} onClick={handleClick} className="lButton">LOGIN</button>
                <p>Not a member? &nbsp; 
                    <a href="/register">SignUp</a></p>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    );
};

export default Login;
