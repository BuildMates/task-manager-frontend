// Axios is used to send HTTP requests
import axios from "axios";

// Instead of writing axios.post everywhere
export const api = axios.create({
    // Backend base URL http://localhost:8000/api/signup
    baseURL: import.meta.env.VITE_API_URL,

    // Every request will send JSON data
    headers: { "Content-Type": "application/json" }
});