// Login.js
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Handle email/password login logic here
    navigate("/tracking");
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    try {
      // Call API to authenticate user
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // Authenticate user and redirect to tracking screen
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async (googleData) => {
    try {
      // Call API to authenticate user with Google
      const response = await fetch("/api/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ googleData }),
      });
      const data = await response.json();
      // Authenticate user and redirect to tracking screen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <h2 className="h2">Login</h2>
      <div className="form">
        <label htmlFor="username">Enter Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>

      <span className="Sign_or">or sign in with</span>

      <div className="google">
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={(error) => console.error(error)}
        />
      </div>
    </div>
  );
};

export default Login;
