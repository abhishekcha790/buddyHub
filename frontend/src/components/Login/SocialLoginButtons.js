// src/components/Login/SocialLoginButtons.js
import React from "react";
import googleIcon from "../assets/google-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import { useSharedState } from "../../Context/PhoneContext";

function SocialLoginButtons() {
  const { setPhone } = useSharedState();

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const handleGoogleSignup = () => {
    const scope = "openid email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
    window.location.href = authUrl;
  };

  return (
    <div className="w-100 text-center" style={{ maxWidth: "450px" }}>
      <div className="d-grid gap-3">
        <button
          onClick={handleGoogleSignup}
          className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 short-button mx-auto"
        >
          <img src={googleIcon} alt="Google" width="20" height="20" />
          Sign-up with Google
        </button>

        <button
          className="btn btn-outline-primary  d-flex align-items-center justify-content-center gap-2 short-button mx-auto"
          onClick={() => setPhone(true)}
        >
          <img src={phoneIcon} alt="Phone" width="20" height="20" />
          Sign-up with Phone
        </button>
      </div>

      <p className="small mt-3">
        By continuing, you agree to <span className="fw-semibold">Excomfy's</span> <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}

export default SocialLoginButtons;
