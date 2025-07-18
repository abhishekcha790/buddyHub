import React, { useState } from "react";
import axios from "axios";
import Arrow from "../assets/arrow1.png";
import { useNavigate } from 'react-router-dom';

const RightUpper = () => {
  const [input, setInput] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(false);

  const navigate = useNavigate();


  const isPhone = (value) => /^\d{10}$/.test(value);
  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendOtp = async () => {
    console.log("started");
    setError("");
    setSuccess("");
    if (otpCooldown) return;

    if (!isPhone(input) && !isEmail(input)) {
      setError("Enter a valid email or 10-digit phone number.");
      return;
    } 

    try {
      const payload = isPhone(input)
        ? { phone: `+91${input}` }
        : { email: input };
       console.log(payload)
      const response = await axios.post("http://localhost:3002/api/auth/login/send-otp", payload);
      if (response.data.success) { 
        setOtpSent(true);
        setSuccess("OTP sent successfully.");
        setOtpCooldown(true);
        setTimeout(() => setOtpCooldown(false), 30000); // 30 sec cooldown
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

      const response = await axios.post("http://localhost:3002/api/auth/login/verify-otp", payload);
      if (response.data.success) {
        setSuccess("Login successful!");
       
        navigate("/") 
      } else {
        setError(response.data.message || "OTP verification failed.");
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
      setVerifying(false);
    }
  };

  return (
    <div style={{ width: "504px", height: "auto", marginTop: "-20px", padding: "8px", borderRadius: "8px" }}>
      <h4 style={{ fontFamily: "'Itim', cursive", fontSize: "24px", textAlign: "center", margin: "15px 15px" }}>
        Hey, Looking to Buy and Sell products!
      </h4>

      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={(e) => e.preventDefault()}>
        <div style={{ position: "relative", width: "400px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter your Email / Phone Number"
            value={input}
            onChange={(e) => setInput(e.target.value.trim())}
            style={{
              width: "100%",
              padding: "10px 40px 10px 15px",
              border: "1px solid black",
              borderRadius: "6px",
            }}
          />
          <img
            src={Arrow}
            alt="arrow"
            onClick={sendOtp}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              cursor: otpCooldown ? "not-allowed" : "pointer",
              opacity: otpCooldown ? 0.4 : 1,
            }}
          />
        </div>

        {otpSent && (
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
        )}

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
            }}
          >
            {verifying ? "Verifying..." : "Login"}
          </button>
        )}

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <p style={{ fontSize: "0.8rem", marginTop: "9px", marginBottom: "0.8rem" }}>
          If you are a new user, please login using one of the options below.
        </p>
      </form>
    </div>
  );
};

export default RightUpper;

