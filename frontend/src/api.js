import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:3001/auth",
});

export const googleAuth = async (code) => api.post("/google", { code });
