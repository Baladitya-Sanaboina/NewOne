import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { CiLogin } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie"; // Import js-cookie library
import "./index.css";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    Cookies.remove("jwtToken"); // Remove the cookie containing the JWT token
    navigate("/login"); // Redirect to the /login path
    console.log("Logged out successfully!");
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/" className="nav-logo">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dbylngblb/image/upload/v1727508953/logo_wfnqks.svg"
              alt="website logo"
            />
          </Link>
          <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-menu-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/dashboard"
                className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/profile"
                className={`nav-link ${isActive("/profile") ? "active" : ""}`}
              >
                Profile
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={handleLogout}
          >
            <CiLogin className="logout-icon" />
          </button>
          <button
            type="button"
            className="nav-hamburger-btn"
            onClick={toggleMobileMenu}
          >
            <RxHamburgerMenu className="hamburger-icon" />
          </button>
        </div>
      </div>
      <div className={`nav-menu-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link
              to="/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link
              to="/cart"
              className={`nav-link ${isActive("/cart") ? "active" : ""}`}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
