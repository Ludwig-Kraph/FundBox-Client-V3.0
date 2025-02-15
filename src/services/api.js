import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";

export const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" }
});

export const fetchUserData = async () => {
    try {
        const response = await api.get("/user");
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

export const fetchTransactionHistory = async () => {
    try {
        const response = await api.get("/transactions");
        return response.data;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
};
