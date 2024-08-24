// /my-react-app/src/services/api.js

const API_BASE_URL = "http://localhost:3001"; // Adjust if your backend runs on a different port

export const createProfile = (profileData) => {
    return fetch(`${API_BASE_URL}/create-profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
    }).then(response => response.json());
};
