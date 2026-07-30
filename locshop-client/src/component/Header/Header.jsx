import React from "react";
import "./Header.css";
import logo from "../src/assets/logo";

function Header({ nav, logo }) {
  return (
    <header className="header">
      {/* Makes the logo a clickable link */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="LocShop logo" />
      </Link>
      <nav className="header_nav">
        <div>
          <a href="/home">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/inspiration">Inspiration</a>
          <a href="/appointment">Appointment</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <button className="header_login">Log In</button>
          <button className="header_signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
