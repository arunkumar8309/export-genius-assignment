import React, { Fragment, useState } from "react";
import Logo from "./../../Assets/Images/Olvera-Logo-Black.png";
import { SocialIcon } from "react-social-icons";

import "./HeaderStyle.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth <= 768); // Initial state based on screen width

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle menu item clicks
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false); // Close the menu in mobile view
    }
  };
  return (
    <Fragment>
      <section className="header_top_message_block">
        <p>TURNING UNCERTAINITY INTO YOUR ADVANTAGE</p>
      </section>

      <header className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#Home" onClick={handleMenuItemClick}>
                HOME
              </a>
            </li>
            <li>
              <a href="#Aboutus" onClick={handleMenuItemClick}>
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleMenuItemClick}>
                OUR SERVICES
              </a>
            </li>
            <li>
              <a href="#career" onClick={handleMenuItemClick}>
                OUR EXPERIENCE
              </a>
            </li>
            <li>
              <a href="#resources" onClick={handleMenuItemClick}>
                RESOURCES
              </a>
            </li>
            <li>
              <a href="#footer" onClick={handleMenuItemClick}>
                <button className="contact-btn"> CONTACT US </button>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                {" "}
                <SocialIcon
                  network="facebook"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                {" "}
                <SocialIcon
                  network="instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/" target="_blank">
                {" "}
                <SocialIcon
                  network="linkedin"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
