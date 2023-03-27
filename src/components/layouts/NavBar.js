import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { RiMenu3Fill } from "react-icons/ri";
import "./style/NavBar.css";
import { useState } from "react";
import { Link} from "react-router-dom";


const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="subNavbar marginLR">
        <div className="logo">
          <BiCameraMovie />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <RiMenu3Fill />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} `}>
          <ul className="pullDown">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categorie">Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

