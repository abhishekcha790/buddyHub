const express = require("express");
const { googleLogin } = require("../controllers/authControllers");
const router = express.Router();
require("dotenv").config();
const { sendOtp, verifyOtp } = require("../controllers/authControllerPhone");



router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/google", googleLogin);


module.exports = router;

