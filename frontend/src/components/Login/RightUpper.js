/**
 * RightUpper.js
 * 
 * This component handles OTP-based authentication using either phone number or email.
 * 
 * Flow:
 * - The user enters a phone number or email address.
 * - If valid, clicking the arrow image sends an OTP to the given phone/email.
 * - Upon successful OTP send, an input field appears to enter the OTP.
 * - After entering the OTP, clicking the "Login" button verifies it via the backend.
 * - On successful verification, the user is redirected to the home page.
 * 
 * Features:
 * - Validates phone/email input.
 * - Implements cooldown logic (30 seconds) to prevent repeated OTP requests.
 * - Handles and displays both error and success messages.
 * - Uses Axios for API communication and React Router for navigation.
 */

import React, { useState } from "react";
import axios from "axios";

import Arrow from "../assets/arrow1.png";       // default gray arrow
import sendArrow from "../assets/OtpArrow2.png"; // ✅ green arrow after OTP sent
import { useNavigate } from "react-router-dom";

import {useAuth} from "../../context/AuthContext"


const RightUpper = () => {
  const [input, setInput] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false); // ✅ Spinner state

  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ use AuthContext

  const isPhone = (value) => /^\d{10}$/.test(value);
  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendOtp = async () => {
    setError("");
    setSuccess("");

    if (otpCooldown || sendingOtp) return; // prevent spamming

    if (!isPhone(input) && !isEmail(input)) {
      setError("Enter a valid email or 10-digit phone number.");
      return;
    }

    try {
      setSendingOtp(true); // ✅ Show spinner instantly

      const payload = isPhone(input)
        ? { phone: `+91${input}` }
        : { email: input };
       console.log(payload)
      const response = await axios.post("http://localhost:3001/api/auth/login/send-otp", payload);
      if (response.data.success) { 
        setOtpSent(true);
        setSuccess("OTP sent successfully!");

        // ✅ Start cooldown → arrow stays green
        setOtpCooldown(true);
        setTimeout(() => setOtpCooldown(false), 30000);
      } else {
        setError(response.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Something went wrong.");
        console.error("Backend error:", err.response.data);
      } else if (err.request) {
        setError("No response from server. Please try again.");
        console.error("No response from server");
      } else {
        setError("Unexpected error occurred.");
        console.error("Axios error:", err.message);
      }
    } finally {
      setSendingOtp(false); // ✅ Hide spinner
    }
  };

  const verifyOtp = async () => {
    setVerifying(true);
    setError("");
    setSuccess("");

  if (!otp || otp.length !== 6) {
    setError("Please enter the 6-digit OTP.");
    setVerifying(false);
    return;
  }

  try {
    const payload = isPhone(input)
      ? { phone: `+91${input}`, otp }
      : { email: input, otp };

    const response = await axios.post("http://localhost:3001/api/auth/login/verify-otp", payload);

    if (response.data.success) {
      const userData = response.data.user;
      const token = response.data.token;

      login(userData); // 🔑 Set context
      setSuccess("Login successful!");
      navigate("/");
    } else {
      setError(response.data.message || "OTP verification failed.");
    }
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message || "Something went wrong.");
    } else if (err.request) {
      setError("No response from server. Please try again.");
    } else {
      setError("Unexpected error occurred.");
    }
  } finally {
    setVerifying(false);
  }
};


  const arrowImage = otpCooldown ? sendArrow : Arrow;

  return (
    <div
      style={{
        width: "504px",
        height: "auto",
        marginTop: "-20px",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <h4
        style={{
          fontFamily: "'Itim', cursive",
          fontSize: "24px",
          textAlign: "center",
          margin: "15px 15px",
        }}
      >
        Hey, Looking to Buy and Sell products!
      </h4>

      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Email/Phone Input */}
        <div style={{ position: "relative", width: "400px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter your Email / Phone Number"
            value={input}
            onChange={(e) => setInput(e.target.value.trim())}
            style={{
              width: "100%",
              padding: "10px 45px 10px 15px", // space for arrow
              border: "1px solid black",
              borderRadius: "6px",
            }}
          />

          {/* ✅ Arrow or Spinner */}
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sendingOtp ? (
              // ✅ Spinner while request is processing
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  border: "2px solid #ccc",
                  borderTop: "2px solid #007bff",
                  borderRadius: "50%",
                  animation: "spin 0.6s linear infinite",
                }}
              />
            ) : (
              <img
                src={arrowImage}
                alt="arrow"
                onClick={sendOtp}
                style={{
                  width: "30px",
                  height: "30px",
                  cursor:
                    otpCooldown || sendingOtp ? "not-allowed" : "pointer",
                  opacity: otpCooldown ? 0.8 : 1,
                  transition: "transform 0.2s ease, opacity 0.3s ease",
                }}
              />
            )}
          </div>
        </div>

        {/* Smooth OTP input transition */}
        <div
          style={{
            transition: "all 0.3s ease",
            opacity: otpSent ? 1 : 0,
            maxHeight: otpSent ? "60px" : "0px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{
              width: "400px",
              padding: "10px 40px 10px 15px",
              border: "1px solid black",
              borderRadius: "6px",
              marginBottom: "20px",
            }}
          />
        </div>

        {/* Login Button */}
        {otpSent && (
          <button
            type="button"
            onClick={verifyOtp}
            disabled={verifying}
            style={{
              width: "200px",
              padding: "8px",
              border: "1px solid black",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: verifying ? "not-allowed" : "pointer",
              transition: "background-color 0.2s ease, transform 0.1s ease",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {verifying ? "Verifying..." : "Login"}
          </button>
        )}

        {/* Errors / Success */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "9px",
            marginBottom: "0.8rem",
          }}
        >
          If you are a new user, please login using one of the options below.
        </p>
      </form>

      {/* ✅ Spinner animation CSS */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RightUpper;




