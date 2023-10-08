import React from "react";
import footerLogo1 from "./../../Assets/Images/Olvera-Logo-Black.png";
import footerLogo3 from "./../../Assets/Images/logo-6.png";
import footerLogo4 from "./../../Assets/Images/logo-7.png";
import footerLogo5 from "./../../Assets/Images/logo-8-1.png";
import { SocialIcon } from "react-social-icons";

import "./FooterStyle.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_main_content_main_block">
        <div className="footer_main_content_sub_block">
          <div className="footer_heading_block">
            <h1>We are open and accepting to all. Come work with US</h1>
            <h1>Come work with US</h1>
            <div className="footer_paragraph_block">
              <p>
                Experts teach you everythink from the comfort of your on home.
                Improve your career today by enrolling in excellent course at
                affordable price
              </p>
            </div>
            <button>Get Started</button>
          </div>
          <div className="footer_logo_main_block">
            <div className="footer_logo_block">
              <img src={footerLogo1} alt="logo" />
            </div>

            <div className="footer_logo_block logo_2">
              <img src={footerLogo3} alt="logo" />
            </div>

            <div className="footer_logo_block logo_3">
              <img src={footerLogo4} alt="logo" />
            </div>

            <div className="footer_logo_block logo_4">
              <img src={footerLogo5} alt="logo" />
            </div>
          </div>
          <div className="footer_all_url_content_main_block">
            <div className="footer_content_block_all_url">
              <img src={footerLogo1} className="logo_content_url" alt="logo" />
              <p>Turning Uncertainty into your Advantage</p>
            </div>

            <div className="footer_content_block_all_url">
              <h2>Resources</h2>
              <a href="#Home">Home</a>
              <a href="#">Articles</a>
              <a href="#video">Video & Guides</a>
              <a href="#Aboutus">AboutUs</a>
            </div>

            <div className="footer_content_block_all_url">
              <h2>Careers</h2>
              <a href="#">Olevera academy</a>
              <a href="#">PrivacyPolicy</a>
              <a href="#">Cookies</a>
            </div>

            <div className="footer_content_block_all_url">
              <a href="#">
                Liability Limited By A Scheme Approved Under Professional
                Services Scheme
              </a>
              <a href="#">Phone: +61 2 8880 4070</a>
              <a href="#">Email: ezibuyenquiries@Oleveraadvisors.com</a>
              <a href="#">Website: olvera.co.nz/ezibuy</a>
            </div>
          </div>
        </div>
      </div>
      <span style={{ borderBottom: "1px solid #fff", width: "100%" }}></span>
      <div className="footer_social_media_main_block">
        <div className="author_block">
          @2023olevra advisors. All right resolved
        </div>
        <div className="social_link_block">
          <a href="https://www.facebook.com/" target="_blank">
            {" "}
            <SocialIcon network="facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <SocialIcon network="instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            {" "}
            <SocialIcon network="twitter" />
          </a>
          <a href="https://in.linkedin.com/" target="_blank">
            {" "}
            <SocialIcon network="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
