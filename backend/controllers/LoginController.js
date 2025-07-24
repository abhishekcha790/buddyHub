/**
 * @summary
 * This controller handles OTP-based authentication via phone or email:
 * 
 * - Accepts phone or email for login
 * - Verifies if the user exists in the database
 * - Generates and sends a 6-digit OTP (SMS via Twilio or email via nodemailer)
 * - Stores OTP and its expiry temporarily in-memory
 * - Verifies the OTP on user input
 * - If valid, generates a JWT token and returns user details
 */

const jwt = require("jsonwebtoken");
const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const sendOtpEmail = require("../utils/sendOtpEmail.js");
const UserModel = require("../models/userModel.js");

// In-memory OTP store: { contact (phone/email): { otp, expiry } }
const otpStore = {};

/**
 * Sends a 6-digit OTP to the user's phone or email
 */
const send_Otp = async (req, res) => {
  const { phone, email } = req.body;
  if (!phone && !email) {
    return res.status(400).json({ success: false, message: "Phone or email is required." });
  }

  const contact = phone || email;

  const user = phone
    ? await UserModel.findOne({ phoneNumber: phone })
    : await UserModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found. Please sign up first." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = Date.now() + 5 * 60 * 1000;

  try {
    if (phone) {
      await client.messages.create({
        body: `Your login OTP is ${otp}`,
        to: phone,
        from: process.env.TWILIO_PHONE_NUMBER,
      });
    } else {
      await sendOtpEmail(email, otp);
    }

    otpStore[contact] = { otp, expiry };
    return res.json({ success: true, message: "OTP sent for login" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

/**
 * Verifies the OTP and returns JWT token if valid
 */
const verify_Otp = async (req, res) => {
  const { phone, email, otp } = req.body;
  const contact = phone || email;

  const record = otpStore[contact];
  if (!record || Date.now() > record.expiry) {
    delete otpStore[contact];
    return res.status(400).json({ success: false, message: "OTP expired or not sent." });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  delete otpStore[contact];

  try {
    const user = phone
      ? await UserModel.findOne({ phoneNumber: phone })
      : await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email || "", phoneNumber: user.phoneNumber || "" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_TIMEOUT }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  send_Otp,
  verify_Otp,
};
