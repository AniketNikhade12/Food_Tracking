// Signup.js
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Handle email/password sign-up logic here
    navigate("/LoginSuccessful");
  };
  const handleEmailSignup = async (event) => {
    event.preventDefault();
    try {
      // Call API to create new user
      const response = await fetch("/api/signup", {
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

  const handleGoogleSignup = async (googleData) => {
    try {
      // Call API to create new user with Google
      const response = await fetch("/api/google-signup", {
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
    <div className="SignUp">
      <div className="Signup-form">
      <h2>Sign Up</h2>
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
      
      </div>
      <button onClick={handleSignUp} className="button">Sign Up</button>
      
      <div className="google">
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign up with Google"
        onSuccess={handleGoogleSignup}
        onFailure={(error) => console.error(error)}
      />
        
      </div>
   
    </div>
  );
};

export default Signup;
