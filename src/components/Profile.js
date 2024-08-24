import React from "react";
import "./Profile.css";
import { createProfile } from "../services/api"; // Adjust the path as needed

const Profile = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const profileData = {
            dob: document.getElementById("dob").value,
            incomeMeans: document.getElementById("income-means").value,
            incomeRange: document.getElementById("income-range").value,
            goal1: document.getElementById("goal1").value,
            goal2: document.getElementById("goal2").value,
            goal3: document.getElementById("goal3").value,
        };

        createProfile(profileData)
            .then((data) => {
                alert(data.message);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">Complete Your Profile</h1>
            <form className="profile-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" id="dob" required />
                </div>
                <div className="input-group">
                    <label htmlFor="income-means">Income Means</label>
                    <select id="income-means" required>
                        <option value="">Select Income Means</option>
                        <option value="salary">Salary</option>
                        <option value="business">Business</option>
                        <option value="freelance">Freelance</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="income-range">Income Range</label>
                    <select id="income-range" required>
                        <option value="">Select Income Range</option>
                        <option value="under_50k">Under $50k</option>
                        <option value="50k_to_100k">$50k - $100k</option>
                        <option value="over_100k">Over $100k</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="goal1">Financial Goal 1</label>
                    <input type="text" id="goal1" placeholder="e.g., Save $10,000" required />
                </div>
                <div className="input-group">
                    <label htmlFor="goal2">Financial Goal 2</label>
                    <input type="text" id="goal2" placeholder="e.g., Buy a car" required />
                </div>
                <div className="input-group">
                    <label htmlFor="goal3">Financial Goal 3</label>
                    <input type="text" id="goal3" placeholder="e.g., Invest in real estate" required />
                </div>
                <div className="button-group">
                    <button type="button" className="clear-btn" onClick={() => document.querySelector(".profile-form").reset()}>Clear Data</button>
                    <button type="submit" className="create-btn">Create Profile</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
