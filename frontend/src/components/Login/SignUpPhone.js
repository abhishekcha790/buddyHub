import React, { useState, useEffect } from 'react';
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
  const [otpError, setOtpError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [showResendBox, setShowResendBox] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const verify_Otp = async (Call_No, otp) => {
    setVerifying(true);
    setOtpError("");

    try {
      const response = await axios.post('http://localhost:3001/api/auth/verify-otp', {
        phone: `+91${Call_No}`,
        otp,
      });

      if (response.data.success) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setOtpError(" OTP verification failed.");
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "OTP verification failed.";
      setOtpError(` ${errMsg}`);
    } finally {
      setVerifying(false);
    }
  };

  const send_Otp = async (Call_No) => {
    setSendAttempted(true);
    if (Call_No.length !== 10) return;

    try {
      const response = await axios.post('http://localhost:3001/api/auth/send-otp', {
        phone: `+91${Call_No}`
      });

      if (response.data.success) {
        setShowResendBox(true);
        setCountdown(30); // start 30s countdown
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-100 px-4" style={{ maxWidth: "500px" }}>
      <h4 className="text-center mb-4" style={{ fontFamily: "'Itim', cursive", fontSize: "clamp(20px, 4vw, 24px)" }}>
        SignUp using Phone no.
      </h4>

      <form className="d-flex flex-column align-items-center">
        <div className="position-relative w-100 mb-1" style={{ maxWidth: "400px" }}>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="form-control"
            placeholder="Enter your Phone Number"
            value={Call_No}
            onChange={(e) => setCall_No(e.target.value.replace(/\D/g, ''))}
            onBlur={() => setTouched(true)}
          />

          <img
            src={Arrow}
            alt="arrow"
            onClick={() => {
              if (Call_No.length === 10 && countdown === 0) {
                send_Otp(Call_No);
              }
            }}
            className="position-absolute"
            style={{
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              cursor: countdown > 0 ? "not-allowed" : "pointer",
              opacity: countdown > 0 ? 0.5 : 1,
            }}
          />
        </div>

        {/* Inline warning below input, right aligned */}
        {showResendBox && (
          <div className="w-100 mb-2 d-flex justify-content-end" style={{ maxWidth: "400px" }}>
            {countdown > 0 ? (
              <p className="text-muted small mb-0">Not received your code? {countdown}s</p>
            ) : (
              <p
                className="text-primary small mb-0"
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => send_Otp(Call_No)}
              >
               Resend
              </p>
            )}
          </div>
        )}

        {(touched || sendAttempted) && Call_No.length > 0 && Call_No.length < 10 && (
          <p className="text-danger small">Enter a valid 10-digit phone number</p>
        )}

        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          onBlur={() => setOtpTouched(true)}
          style={{ maxWidth: "400px" }}
        />

        {otpTouched && otp.length !== 6 && (
          <p className="text-danger small">Enter a valid 6-digit OTP</p>
        )}

        {otpError && <p className="text-danger small mt-1">{otpError}</p>}

        <button
          type="button"
          disabled={verifying || otp.length !== 6}
          onClick={() => verify_Otp(Call_No, otp)}
          className={`btn w-100 mt-3 ${verifying ? 'btn-secondary' : 'btn-primary'}`}
          style={{ maxWidth: "200px" }}
        >
          {verifying ? "Verifying OTP..." : "Create Account"}
        </button>

        <p className="small text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
        </p>
        <p className="extra-small-text text-center mt-0">
          By continuing, you agree to <span className="fw-semibold">Excomfy's</span> <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default SignUpPhone;
