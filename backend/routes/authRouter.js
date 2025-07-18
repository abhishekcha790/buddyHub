const express = require("express");
const { googleLogin } = require("../controllers/authControllers");
const router = express.Router();
require("dotenv").config();
const { send_Otp, verify_Otp } = require("../controllers/LoginController")
const {sendOtp,verifyOtp}=require("../controllers/authControllerPhone")

router.post("/login/send-otp",send_Otp)
router.post("/login/verify-otp",verify_Otp)
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/google", googleLogin);


module.exports = router;

