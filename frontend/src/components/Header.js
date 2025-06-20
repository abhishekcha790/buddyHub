import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="mt-3">
        <button>
          <Link to="/login"> Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
