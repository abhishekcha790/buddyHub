import React from "react";
import Arrow from "../assets/arrow1.png";
const RightUpper = () => {
  return (
    <div
      style={{
        width: "504px",
        height: "260px",
        marginTop: "-20px",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      {/* Heading */}
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

      {/* Form */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Email Input */}

        <div
          style={{ position: "relative", width: "400px", marginBottom: "15px" }}
        >
          <input
            type="email"
            placeholder="Enter your Email / Phone Number"
            style={{
              width: "100%",
              padding: "10px 40px 10px 15px", // Extra right padding for the image
              border: "1px solid black",
              borderRadius: "6px",
            }}
          />
          <img
            src={Arrow}
            alt="arrow"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          />
        </div>

        {/* OTP Input */}
        <input
          type="text"
          placeholder="Enter OTP"
          style={{
            width: "400px",
            padding: "10px 40px 10px 15px",
            border: "1px solid black",
            borderRadius: "6px",
            marginBottom: "20px",
          }}
        />

        {/* Submit Button */}
        <button
          className="btn btn-primary d-flex align-items-center justify-content-center"
          type="submit"
          style={{
            width: "200px",
            padding: "8px",
            border: "1px solid black",
            color: "#fff",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>

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
    </div>
  );
};

export default RightUpper;
