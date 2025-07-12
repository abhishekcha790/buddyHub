import googleIcon from "../assets/google-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import {useSharedState} from "../../context/PhoneContext"


function SocialLoginButtons() {

 const {Phone,setPhone}=useSharedState();

 const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
 const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;


  const handleGoogleSignup = () => {
    const scope = "openid email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;
    window.location.href = authUrl;
  };

  return (
    <div style={{ width: "450px", height: "170px", borderRadius: "10px", padding: "5px", backgroundColor: "#fff", boxSizing: "border-box" }}>
      <div className="d-grid gap-3 col-6 mx-auto">
        <button onClick={handleGoogleSignup} className="btn btn-primary d-flex align-items-center" style={{ border: "1px solid black", justifyContent: "center", gap: "10px" }}>
          <img src={googleIcon} alt="Google" width="20" height="20" /> Sign-up with Google
        </button>
        <button className="btn btn-primary d-flex align-items-center" onClick={()=>setPhone(true)} style={{ border: "1px solid black", justifyContent: "center", gap: "10px" }}>
          <img src={phoneIcon} alt="Phone" width="20" height="20" /> Sign-up with Phone
        </button>
      </div>
      <p style={{ fontSize: "0.8rem", marginTop: "1rem", display: "flex", justifyContent: "center" }}>
        By continuing, you agree to XYZ's <a href="/terms-of-use" className="text-terms-of-use">Terms of Use</a> and <a href="/privacy-policy" className="text-privacy-policy">Privacy Policy</a>.
      </p>
    </div>
  );
}

export default SocialLoginButtons;