const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // your MySQL root password
    database: "profile_db"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database.");
});

// Endpoint to handle profile creation
app.post("/create-profile", (req, res) => {
    const { dob, incomeMeans, incomeRange, goal1, goal2, goal3 } = req.body;

    const query = "INSERT INTO profiles (dob, income_means, income_range, goal1, goal2, goal3) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [dob, incomeMeans, incomeRange, goal1, goal2, goal3], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to create profile." });
        }
        res.status(200).json({ message: "Profile created successfully." });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
