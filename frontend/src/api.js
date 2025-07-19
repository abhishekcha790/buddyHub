// api.js
//
// This file sets up an Axios instance to communicate with the backend server's auth routes.
// It also exports a helper function `googleAuth` that sends the Google OAuth code to the backend.
//
// Usage:
// googleAuth(code) → sends POST request to backend with auth code to exchange for user info + token.

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/auth",
});

export const googleAuth = async (code) => api.post("/google", { code });


/* 
===================== 🌐 Flow Summary =====================

1. User clicks "Sign-up with Google" → redirected to Google OAuth consent screen.
2. Upon approval, Google redirects back with an authorization `code` in URL.
3. In the frontend, `googleAuth(code)` sends this `code` to the backend.
4. Backend exchanges this `code` with Google for user profile and access token.
5. Backend responds with your app's `user` object and JWT `token`.
6. Frontend logs in the user and stores token for session persistence.

============================================================
*/