import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-4">
      <Link to="/" className="navbar-brand">exComfy</Link>
      {user ? (
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center"
            type="button"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={user.image} alt="User" className="rounded-circle me-2" width="30" height="30" />
            {user.name}
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
          </ul>
        </div>
      ) : (
        <Link to="/login" className="btn btn-outline-primary">Login</Link>
      )}
    </nav>
  );
}

export default Header;
