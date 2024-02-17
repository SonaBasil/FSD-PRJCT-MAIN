import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        city : "",
        country: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await axios.post("/auth/register", credentials);
            // Assuming the server responds with user details after successful registration
            console.log("User registered:", res.data);
            // Redirect to login page after successful registration
            navigate("/login");
        } catch (err) {
            setError(err.response.data.message);
        }
        setLoading(false);
    };

    return (
        <div className="SignUp">
            <h2 className="signupHeading">SIGNUP</h2>
            <div className="sContainer">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="sInput"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="sInput"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="sInput"
                />

                  <input
                    type="phone"
                    placeholder="Phone"
                    id="phone"
                    value={credentials.phone}
                    onChange={handleChange}
                    className="sInput"
                />


                  <input
                    type="country"
                    placeholder="Country"
                    id="country"
                    value={credentials.country}
                    onChange={handleChange}
                    className="sInput"
                />

                 <input
                    type="city"
                    placeholder="City"
                    id="city"
                    value={credentials.city}
                    onChange={handleChange}
                    className="sInput"
                />
                <button disabled={loading} onClick={handleClick} className="sButton">
                    SIGN UP
                </button>
                <p className="loginLink">Already a user? &nbsp; <a href="/login">Login</a></p>

                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};

export default SignUp;
