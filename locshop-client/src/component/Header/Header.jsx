import React from "react";
import "./Header.css";

import { NavLink } from "react-router";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      {/* Makes the logo a clickable link */}
      <nav className="header__nav">
        <NavLink to="/home" element={<Home />}>
          <img className="header__logo" src={logo} alt="LocShop logo" />
        </NavLink>

        <div>
          <NavLink to="/home" element={<Home />}>
            Home
          </NavLink>
          <NavLink to="/services" element={<Services />}>
            Services
          </NavLink>
          <NavLink to="/gallery" element={<Gallery />}>
            Gallery
          </NavLink>
          <NavLink to="/inspiration" element={<Inspiration />}>
            Inspiration
          </NavLink>
          <NavLink to="/appointment" element={<Appointment />}>
            Appointment
          </NavLink>
          <NavLink to="/contact" element={<Contact />}>
            Contact
          </NavLink>
        </div>
        <div>
          <button className="header__login">Log In</button>
          <button className="header__signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
