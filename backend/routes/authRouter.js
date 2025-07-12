const express = require("express");
const router = express.Router();
require("dotenv").config();
const { sendOtp, verifyOtp } = require("../controllers/authControllerPhone");



router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);


module.exports = router;

