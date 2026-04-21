import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { FiTag } from "react-icons/fi";
import { GoFileDirectory } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* sidebar nav */}
      <nav>
        <ul>
          <li className="active">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <RiHome4Line />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <FiTag style={{ transform: "scaleX(-1)" }} />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <GoFileDirectory />
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
