import location from "../assets/location.png";

function LogoSection() {
  return (
    <div className="d-flex align-items-center gap-5">
      <div
        className="logo rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        Logo
      </div>

      <div className="d-flex align-items-center">
        <img src={location} alt="Location" width="18" height="18" className="me-1" />
        <span>Lucknow</span>
        <i className="bi bi-caret-down-fill ms-1"></i>
      </div>
    </div>
  );
}

export default LogoSection;
