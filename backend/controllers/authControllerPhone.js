/**
 * @summary
 * Google OAuth Login Controller:
 * - Receives authorization code from frontend
 * - Exchanges it for access and ID tokens using Google OAuth2 client
 * - Fetches user info (name, email, picture) from Google API
 * - Checks if user exists in the database; creates one if not
 * - Generates a JWT token with user ID and email
 * - Responds with login success message, token, and user details
 */


const UserModel = require("../models/userModel.js");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const otpStore = {}; // { "+919876543210": { otp: '123456', expiry: timestamp } }

const sendOtp = async (req, res) => {
  const { phone } = req.body;
  const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = Date.now() + 5 * 60 * 1000;

  console.log("📞 Phone:", formattedPhone);
  console.log("🔢 OTP:", otp);

  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      to: formattedPhone,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    otpStore[formattedPhone] = { otp, expiry };

    console.log("✅ OTP sent to", formattedPhone);
    console.log(otpStore);
    res.json({ success: true, message: "OTP sent successfully!" });
  } catch (err) {
    console.error("❌ Twilio error:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

const verifyOtp = async(req, res) => {
  const { phone, otp } = req.body;
  const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;

  const record = otpStore[formattedPhone];
  console.log(otpStore);
  if (!record) {
    return res.status(400).json({ success: false, message: 'OTP not sent to this number.' });
  }

  if (Date.now() > record.expiry) {
    return res.status(400).json({ success: false, message: 'OTP expired.' });
  }

  if (record.otp === otp) {
    delete otpStore[formattedPhone]; // ✅ correct key
let user = await UserModel.findOne({ phoneNumber: formattedPhone });
if (!user) {
  user = await UserModel.create({ phoneNumber: formattedPhone,authProvider: "phone" });
}

    return res.json({ success: true, message: 'OTP verified successfully!' });
  }

  return res.status(400).json({ success: false, message: 'Invalid OTP.' });
};

module.exports = {
  sendOtp,
  verifyOtp,
};
