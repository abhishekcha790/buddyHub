import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

import LogoSection from "./LogoSection";
import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white   px-2 py-2">
      <div className="container-fluid">

        <div className="d-flex align-items-center w-100 justify-content-between flex-wrap gap-2">

          {/* Left: Logo and Location */}
          <LogoSection />

          {/* Center: Search (hidden on very small screens) */}
          <div className="flex-grow-1 d-none d-md-block">
            <SearchBar />
          </div>

          {/* Right: User/Login/Sell */}
          <UserSection />
        </div>

        {/* Optional: Search visible below on small screens */}
        <div className="w-100 d-md-none mt-2">
          <SearchBar />
        </div>

      </div>
    </nav>
  );
}

export default Header;
