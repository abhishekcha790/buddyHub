import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Arrow from "../assets/arrow1.png";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ERROR_MESSAGES = {
  INVALID_PHONE: "Enter a valid 10-digit phone number",
  INVALID_OTP: "Enter a valid 6-digit OTP",
};

const SignUpPhone = () => {
  const [Call_No, setCall_No] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [otpTouched, setOtpTouched] = useState(false);
  const [showResendBox, setShowResendBox] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [sendAttempted, setSendAttempted] = useState(false);
 
  const navigate = useNavigate();
  const { loginWithPhone } = useAuth();

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const isValidPhone = (phone) => /^\d{10}$/.test(phone);
  const isValidOtp = (code) => /^\d{6}$/.test(code);

  const send_Otp = async () => {
    setSendAttempted(true);
    setOtpError("");

    if (!isValidPhone(Call_No)) return;

    try {
      const res = await axios.post('http://localhost:3001/api/auth/send-otp', {
        phone: `+91${Call_No}`
      });

      if (res.data.success) {
        setShowResendBox(true);
        setCountdown(30);
      }
    } catch (error) {
      console.error("OTP send failed", error);
    }
  };

  const verify_Otp = async () => {
    setOtpError("");

    if (!isValidOtp(otp)) {
      setOtpError(ERROR_MESSAGES.INVALID_OTP);
      return;
    }

    setVerifying(true);

    if (!isValidOtp(otp)) {
      setOtpError(ERROR_MESSAGES.INVALID_OTP);
      return;
    }

    setVerifying(true);

    try {
      const response = await axios.post('http://localhost:3001/api/auth/verify-otp', {
        phone: `+91${Call_No}`,
        otp,
      });

      if (response.data.success) {
        loginWithPhone();
        navigate("/");
      } else {
        setOtpError(ERROR_MESSAGES.INVALID_OTP);
      }
    } catch (error) {
      setOtpError(ERROR_MESSAGES.INVALID_OTP);
    } finally {
      setVerifying(false);
    }
  };

  

  return (
    <div className="w-100 px-4" style={{ maxWidth: "500px" }}>
      <h4 className="text-center mb-4" style={{ fontFamily: "'Itim', cursive", fontSize: "clamp(20px, 4vw, 24px)" }}>
        SignUp using Phone no.
      </h4>

      <form className="d-flex flex-column align-items-center">
        {/* Phone Input */}
        <div className="position-relative w-100 mb-1" style={{ maxWidth: "400px" }}>
          <input
            type="text"
            inputMode="numeric"
            className="form-control"
            placeholder="Enter your Phone Number"
            value={Call_No}
            onChange={(e) => {
              setCall_No(e.target.value.replace(/\D/g, ''));
              setOtpError("");
            }}
          />
          <img
            src={Arrow}
            alt="arrow"
            onClick={countdown === 0 ? send_Otp : undefined}
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

        {showResendBox && (
          <div className="w-100 mb-2 d-flex justify-content-end" style={{ maxWidth: "400px" }}>
            {countdown > 0 ? (
              <p className="text-muted small mb-0">Not received your code? {countdown}s</p>
            ) : (
              <p
                className="text-primary small mb-0"
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={send_Otp}
              >
                Resend
              </p>
            )}
          </div>
        )}

        {(otpTouched || sendAttempted) && Call_No.length > 0 && Call_No.length < 10 && (
          <p className="text-danger small">Enter a valid 10-digit phone number</p>
        )}

        <input
          type="text"
          className="form-control mt-2"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value.replace(/\D/g, ''));
            setOtpError("");
          }}
          style={{ maxWidth: "400px" }}
        />

        {/* OTP error */}
        {otpError && <p className="text-danger small mt-1">{otpError}</p>}

        {/* Submit Button */}
        <button
          type="button"
          disabled={verifying}
          onClick={verify_Otp}
          className={`btn w-100 mt-3 ${verifying ? 'btn-secondary' : 'btn-primary'}`}
          style={{ maxWidth: "200px" }}
        >
          {verifying ? "Verifying OTP..." : "Create Account"}
        </button>

        {/* Redirect to login */}
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
