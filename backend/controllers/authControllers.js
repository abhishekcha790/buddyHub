/**
 * @summary
 * Handles Google OAuth login:
 * - Receives auth code from frontend
 * - Exchanges code for access token via Google OAuth2
 * - Fetches user info from Google API
 * - Checks if user exists in DB, creates if not
 * - Generates JWT token for authenticated sessions
 * - Returns token and user data to the client
 */

const { oauth2Client } = require("../utils/googleConfig.js");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const UserModel = require("../models/userModel.js");

const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;
  
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`);
    const { name, email, picture } = userInfo.data;

    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({ name, email, image: picture, authProvider: "google" });
    }

    const token = jwt.sign({ _id: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMEOUT,
    });
    
    return res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error during Google login:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { googleLogin };
