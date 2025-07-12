import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:3002/auth",
});

export const googleAuth = async (code) => api.post("/google", { code });
