import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api", 
    withCredentials: true, // for cookie/session-based auth
    headers: {
        "Content-Type": "application/json", 
        Accept: "application/json"
    },
});

export default API;