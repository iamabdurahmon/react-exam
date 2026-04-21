// Header.jsx
import "./header.css";
import logo from "../../assets/icons/logo.png";
import profileIMg from "../../assets/icons/profile-img.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      <div className="header-info">
        {/* logo */}
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>

        {/* search */}
        <div className="search">
          <span>
            <CiSearch />
          </span>
          <input type="search" placeholder="search..." />
        </div>
      </div>

      {/* profile */}
      <div className="profile">
        <img src={profileIMg} alt="image" />
        <h1>X’eriya Ponald</h1>
      </div>
    </header>
  );
};

export default Header;
