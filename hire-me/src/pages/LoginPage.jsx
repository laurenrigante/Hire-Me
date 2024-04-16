import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/LoginPage.css"; // Make sure your CSS file path is correct
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/chat");
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Log In</h2> {/* Changed the caption here */}
          <div className="input-group">
            <label className="signup" htmlFor="email">
              Email {/* Changed label for email */}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label className="signup" htmlFor="password">
              Password {/* Changed label for password */}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="loginbtn"
            type="submit"
            style={{ marginBottom: "20px", marginTop: "20px", width: "100%" }}
          >
            Login
          </button>
          <a
            href="#"
            className="forgot-password-link"
            style={{ color: "#5f43b2" }}
          >
            Forgot Password?
          </a>
        </form>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "-150px",
        }}
      >
        <a
          href="/signup"
          className="forgot-password-link"
          style={{ color: "#5f43b2" }}
        >
          Don't have an account with us? Sign up now!
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
