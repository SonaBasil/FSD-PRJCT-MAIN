import React, { useContext, useState } from "react";
import "./signup.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    // e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      console.log(credentials)
      const res = await axios.post("http://localhost:8080/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };
  

  console.log(user);

  return (
    <div className="SignUp">
      <h2 className="signupHeading">SIGNUP</h2>
      <div className="sContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="sInput"
        />
        <button onClick={handleClick} className="sButton">
          SIGN UP
        </button>
        <p className="loginLink">Already a user? &nbsp; <a href="/login">Login</a></p>

        {error && <span className="error">{error.message}</span>}
      </div>
    </div>
  );
};

export default SignUp;
