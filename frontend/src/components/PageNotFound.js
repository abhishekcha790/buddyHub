import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} // Full screen height
    >
      <div className="text-center">
        <h2>404 Page Not Found</h2>

        <button
          className="btn mt-3"
          style={{
            border: "1px solid black",
            padding: "0.5rem 1.5rem",
            backgroundColor: "transparent",
            color: "black",
          }}
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
