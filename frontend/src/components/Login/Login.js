import React from "react";
import Header from "../Header";
import LeftSideLogin from "./LeftSideLogin";
import SocialLoginButtons from "./SocialLoginButtons";
import RightUpper from "./RightUpper";
import SignUpPhone from "./SignUpPhone"
import {useSharedState} from "../../Context/PhoneContext"

function Login() {
  const { Phone,setPhone} = useSharedState();

  return (
    <div>
      {/* Fixed Header */}
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
        <Header />
      </div>

      <div
        style={{
          marginTop: "100px", // Space for the fixed header
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 100px)", // Fill screen below header
        }}
      >
        <div
          style={{
            display: "flex",
            width: "726px",
            height: "430px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            borderRadius: "12px",
            overflow: "hidden",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "#fff",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              width: "35%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LeftSideLogin />
          </div>
          {/* Right Side */}
          <div
            style={{
              width: "65%",
              backgroundColor: "#fdfdfd",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "1px solid #e0e0e0",
            }}
          >
            {Phone ? (
              <SignUpPhone />
            ) : (
              <>
                <RightUpper />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <hr style={{ flex: 1, borderColor: "#000" }} />
                  <span
                    style={{
                      padding: "0 15px",
                      fontSize: "12px",
                      color: "#444",
                    }}
                  >
                    Or
                  </span>
                  <hr style={{ flex: 1, borderColor: "#000" }} />
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
