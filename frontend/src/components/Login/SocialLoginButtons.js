// SocialLoginButtons.js
//
// This component provides two login options for the user:
// 1. Sign-up with Google – Redirects the user to Google's OAuth login screen.
// 2. Sign-up with Phone – Triggers the phone login UI by updating shared context state.
//
// Flow:
// - When the "Sign-up with Google" button is clicked, the user is redirected to Google's OAuth server.
// - After successful Google login, Google redirects back with a `code` to your redirect URI.
// - That code is later used in `GoogleCallback.js` to fetch user details and token.
//
// - When the "Sign-up with Phone" button is clicked, we update a shared state (`setPhone(true)`),
//   which tells the parent component to show the phone login form instead of Google login.
//
// Both buttons are styled using Bootstrap and display a small icon for better UX.


import React from "react";
import googleIcon from "../assets/google-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import { useSharedState } from "../../context/PhoneContext";

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
