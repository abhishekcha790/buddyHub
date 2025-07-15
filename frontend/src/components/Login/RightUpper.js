// src/components/Login/RightUpper.js
import React from "react";
import Arrow from "../assets/arrow1.png";

const RightUpper = () => {
  return (
    <div className="w-100" style={{ maxWidth: "500px" }}>
      <h4 className="text-center mb-4" style={{ fontSize: "clamp(18px, 4vw, 23px)" }}>
        Hey, Looking to Buy and Sell products!
      </h4>

      <form className="d-flex flex-column align-items-center">
        <div className="position-relative w-100 mb-3" style={{ maxWidth: "400px" }}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email / Phone Number"
          />
          <img
            src={Arrow}
            alt="arrow"
            className="position-absolute"
            style={{
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          />
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter OTP"
          style={{ maxWidth: "400px" }}
        />

        <button className="btn btn-primary w-100 mb-2" style={{ maxWidth: "200px" }}>
          Login
        </button>

        <p className="extra-small-text text-center mb-0">
          If you are a new user, please login using one of the options below.
        </p>
      </form>
    </div>
  );
};

export default RightUpper;
