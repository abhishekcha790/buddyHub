import React, { useState } from 'react';
import axios from 'axios';
import Arrow from "../assets/arrow1.png";
import { useNavigate } from 'react-router-dom';

const SignUpPhone = () => {
  const [Call_No, setCall_No] = useState("");
  const [otp, setOtp] = useState("");
  const [touched, setTouched] = useState(false);
  const [sendAttempted, setSendAttempted] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [otpTouched, setOtpTouched] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCooldown, setOtpCooldown] = useState(false);
  const [otpError, setOtpError] = useState("");
 

  const navigate = useNavigate();

 const verify_Otp = async (Call_No, otp) => {
  setVerifying(true);
  setOtpError("");


  try {
    const response = await axios.post('http://localhost:3002/api/auth/verify-otp', {
      phone: `+91${Call_No}`,
      otp,
    });

    if (response.data.success) {
      setTimeout(() => {
        navigate("/"); 
      }, 1000);
    } else {
      setOtpError("❌ OTP verification failed.");
    }

    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.message || "OTP verification failed.";
    setOtpError(`❌ ${errMsg}`);
    return { success: false };
  } finally {
    setVerifying(false);
  }
};


  const send_Otp = async (Call_No) => {
    setSendAttempted(true);
     setOtpSent(false); 
    if (Call_No.length !== 10 || otpCooldown) return;

    try {
      console.log("start sending");
      const response = await axios.post('http://localhost:3002/api/auth/send-otp', {
        phone: `+91${Call_No}`
      });
      console.log(response.data);
      if (response.data.success) {
      setOtpSent(true);
      setOtpCooldown(true); // 🧊 Start cooldown

      // 🔁 Reset cooldown after 30 seconds (you can increase if needed)
      setTimeout(() => {
        setOtpCooldown(false);
        setOtpSent(false); // Optional: clear success message after cooldown
      }, 30000);
    }
      return response.data;
    } catch (error) {
      console.error(error);
      return { success: false, message: "Failed to send OTP." };
    }
  };

  return (
    <div
      style={{
        width: "488px",
        height: "auto",
        margin: "-24px",
        padding: "48px",
        borderRadius: "8px",
      }}
    >
      <h4
        style={{
          fontFamily: "'Itim', cursive",
          fontSize: "24px",
          textAlign: "center",
          margin: "20px 20px",
        }}
      >
        SignUp using Phone no.
      </h4>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Phone Input */}
        <div style={{ position: "relative", width: "400px", marginBottom: "5px" }}>
          <input
            type="text"  
            inputMode="numeric"  // opens number pad on mobile
            pattern="[0-9]*" 
            placeholder="Enter your Phone Number"
            value={Call_No}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ''); // remove all non-digits
               setCall_No(value);
              }}
            onBlur={() => setTouched(true)}
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
             onClick={() => {
              if (!otpCooldown && Call_No.length === 10) {
              send_Otp(Call_No);
              }
             }}
           style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "30px",
            height: "30px",
            cursor: otpCooldown ? "not-allowed" : "pointer",
            opacity: otpCooldown ? 0.5 : 1,
          }}
          />
        </div>
         {otpCooldown && (
       <p style={{ color: 'orange', fontSize: '14px', marginTop: '5px' }}>
        Please wait 30 seconds sending another OTP.
       </p>
       )}

{otpSent && !otpCooldown && (
  <p style={{ color: 'green', fontSize: '14px', marginTop: '5px' }}>
    ✅ OTP sent successfully!
  </p>
)}



        {/* Error Message */}
        {(touched || sendAttempted) && Call_No.length > 0 && Call_No.length < 10 && (
          <p style={{
            color: 'red',
            fontSize: '14px',
            marginTop: '3px',
            marginBottom: '12px',
            fontWeight: '500'
          }}>
            Enter a valid 10-digit phone number
          </p>
        )}

        {/* OTP Input */}
        <input
  type="text"
  placeholder="Enter OTP"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
  onBlur={() => setOtpTouched(true)}
  style={{
    width: "400px",
    padding: "10px 40px 10px 15px",
    border: "1px solid black",
    borderRadius: "6px",
    marginBottom: "5px",
  }}
/>

{otpTouched && otp.length !== 6 && (
  <p style={{ color: 'red', fontSize: '14px', marginBottom: '15px' }}>
    Enter a valid 6-digit OTP
  </p>
)}
{otpError && <p style={{ color: 'red', marginTop: '5px' }}>{otpError}</p>}



        {/* Submit Button */}
        <button
  className="btn btn-primary d-flex align-items-center justify-content-center"
  type="button"
  disabled={verifying || otp.length !== 6}
  onClick={() => verify_Otp(Call_No, otp)}
  style={{
    width: "200px",
    padding: "8px",
    border: "1px solid black",
    color: "#fff",
    borderRadius: "6px",
    fontWeight: 'bold',
    cursor: verifying ? "not-allowed" : "pointer",
    backgroundColor: verifying ? "#888" : "#007bff",
    transition: "all 0.3s ease",
  }}
>
  {verifying ? "Verifying OTP..." : "Create Account"}
</button>



        <p style={{ fontSize: "0.8rem", marginTop: "9px", marginBottom: "0.8rem" }}>
          Already have an account ? <a href="/login">Log In</a>
        </p>
        <p style={{ marginTop: "60px", fontSize: "x-small" }}>
          By continuing, you agree to Excompfy's Terms of Use and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default SignUpPhone;
