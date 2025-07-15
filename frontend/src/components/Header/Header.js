import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";

import LogoSection from "./LogoSection";
import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

function Header() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4 py-2">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <LogoSection />
        <SearchBar />
        <UserSection />
      </div>
    </nav>
  );
}

export default Header;
