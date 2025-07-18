
const sendOtpEmail=require("../utils/sendOtpEmail.js")
const UserModel = require("../models/userModel.js");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const otpStore = {}; 

const send_Otp = async (req, res) => {
  const { phone, email } = req.body;

  if (!phone && !email) {
    return res.status(400).json({ success: false, message: "Phone or email is required." });
  }
  const contact = phone || email;
 
  // ✅ Check if user exists in DB
  let user = null;
  if (phone) {
    user = await UserModel.findOne({ phoneNumber: phone });
  } else {
    console.log("in controller")
    user = await UserModel.findOne({ email });
  }

  if (!user) {
    console.log("not here")
    return res.status(404).json({ success: false, message: "User not found. Please sign up first." });
  }

  // ✅ Generate OTP
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
      console.log("error in send otp in mail")
      await sendOtpEmail(email, otp);
    }

    otpStore[contact] = { otp, expiry };
    return res.json({ success: true, message: "OTP sent for login" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};



const verify_Otp = async (req, res) => {
  const { phone, email, otp } = req.body;
  const contact = phone || email;

  const record = otpStore[contact];
  if (!record) {
    return res.status(400).json({ success: false, message: "OTP not sent or expired" });
  }

  if (Date.now() > record.expiry) {
    delete otpStore[contact];
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  delete otpStore[contact];


  return res.json({ success: true, message: "Login successful" });
};



module.exports = {
  send_Otp,
  verify_Otp,
};