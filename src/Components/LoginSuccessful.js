import React from "react";
import "./LoginSuccessful.css";
import { useNavigate } from "react-router-dom";
import food from "../assets/food.jpg";

const LoginSuccessful = () => {
  const navigate = useNavigate();
  const handleTracking = () => {
    // Handle email/password sign-up logic here
    navigate("/tracking");
  };
  const handleLogout = () => {
    // Handle email/password sign-up logic here
    navigate("/login");
  };
  return (
    <div className="login-successful" style={{ display: "-ms-inline-grid" }}>
      <div className="login-image">
        <img src={food} alt="" />
      </div>
      <div className="login-content">
        <div className="success-icon">✓</div>
        <h1>Login Successful</h1>
        <button onClick={handleTracking} className="button">
          Go to Tracking Screen
        </button>

        <button onClick={handleLogout} className="button">
          {" "}
          Logout
        </button>
      </div>
    </div>
  );
};

export default LoginSuccessful;
