// Login.js: This is the main login page component. It renders the fixed header, a centered login box with two sections:
// LeftSideLogin shows a Bootstrap carousel with promotional messages.
// The right side conditionally renders either the phone sign-up form or login with email/Google/OTP options.
// Uses context (PhoneContext) to toggle between views and handles responsive layout using Bootstrap.

import React from "react";
import Header from "../Header/Header";
import LeftSideLogin from "./LeftSideLogin";
import SocialLoginButtons from "./SocialLoginButtons";
import RightUpper from "./RightUpper";
import SignUpPhone from "./SignUpPhone";
import { useSharedState } from "../../context/PhoneContext";
import "./Login.css";

function Login() {
  const { Phone } = useSharedState();

  return (
    <div>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Header />
      </div>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "10px", marginTop: "-50px" }}>
        <div className="row shadow rounded overflow-hidden bg-white w-100" style={{ maxWidth: "750px" }}>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center bg-white border-end">
            <LeftSideLogin />
          </div>

          <div className="col-12 col-md-8 d-flex flex-column align-items-center p-3 bg-light">
            {Phone ? (
              <SignUpPhone />
            ) : (
              <>
                <RightUpper />
                <div className="w-100 d-flex align-items-center my-0">
                  <hr className="flex-grow-1 text-dark" />
                  <span className="mx-1 small text-muted">Or</span>
                  <hr className="flex-grow-1 text-dark" />
                </div>
                <SocialLoginButtons />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
