import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup-container">
            <h1 className="signup-title">Create Your MoneyMind Account</h1>
            <form className="signup-form">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Surname" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
