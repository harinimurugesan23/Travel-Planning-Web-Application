import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  // Check if the user is admin before sending the request
  if (email === "admin@gmail.com" && password === "admin123") {
    alert("Admin login successful");
    localStorage.setItem("userEmail", email);
    navigate("/admin"); // Navigate to Admin page
    return;
  }

  try {
    // Regular user login check with backend
    const res = await axios.post("https://travel-backend-ceam.onrender.com/api/login", {
      email,
      password,
    });

    if (res.status === 200) {
      alert("Login successful");
      localStorage.setItem("userEmail", email);
      navigate("/home");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Login failed. Please check your credentials.");
  }
};


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome back!</h2>
        <p>Please enter your details</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign-up here</span>
        </p>

        <button className="back-button" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
