import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import plusSell from "../assets/plus.png";
import favourite from "../assets/fav.png";

function UserSection() {
  const { user, logout } = useAuth();

  return (
    <div className="d-flex align-items-center gap-4">
      <img src={favourite} alt="Favorites" width="28" height="28" title="Favorites" />

      {user ? (
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center"
            type="button"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={user.image} alt="User" className="rounded-circle" width="30" height="30" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="btn btn-outline-primary">Login</Link>
      )}

      <button className="btn p-0 border-0 bg-transparent">
        <img src={plusSell} alt="Sell" style={{ height: "40px" }} />
      </button>
    </div>
  );
}

export default UserSection;