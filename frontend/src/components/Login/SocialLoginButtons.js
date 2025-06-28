import googleIcon from "../assets/google-icon.png"; // You need to add this image in your assets folder
import phoneIcon from "../assets/phone-icon.png"; // Same for phone icon

function SocialLoginButtons() {
  return (
    <>
      <div
        style={{
          width: "420px",
          height: "170px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          padding: "20px",
          backgroundColor: "#fff",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <div className="d-grid gap-3 col-6 mx-auto">
          <button
            className="btn btn-primary d-flex align-items-center"
            type="button"
            style={{
              border: "1px solid black",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img src={googleIcon} alt="Google" width="20" height="20" />
            Login with Google
          </button>
          <button
            className="btn btn-primary d-flex align-items-center"
            type="button"
            style={{
              border: "1px solid black",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img src={phoneIcon} alt="Phone" width="20" height="20" />
            Login with Phone
          </button>
        </div>
        <p style={{ fontSize: "0.8rem", marginTop: "1rem" }}>
          By continuing, you agree to XYZ's{" "}
          <a href="/terms-of-use" className="text-terms-of-use">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-privacy-policy">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default SocialLoginButtons;
