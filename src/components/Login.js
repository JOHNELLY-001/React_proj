import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Login to MoneyMind</h1>
            <form className="login-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
