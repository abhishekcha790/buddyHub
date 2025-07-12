import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/auth",
});

export const googleAuth = async (code) => api.post("/google", { code });
