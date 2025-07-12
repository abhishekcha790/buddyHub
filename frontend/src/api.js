import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:3002/auth",
});

export const googleAuth = (code) => api.get(`google?code=${code}`);
