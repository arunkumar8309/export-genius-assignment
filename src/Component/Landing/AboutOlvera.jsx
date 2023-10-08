import React from "react";
import Logo1 from "./../../Assets/Images/logo-1.png";
import Logo2 from "./../../Assets/Images/logo-2.png";
import Logo3 from "./../../Assets/Images/logo-3.png";
import Logo4 from "./../../Assets/Images/logo-4.png";

function AboutOlvera() {
  return (
    <section className="olvera_about_main_block" id="resources">
      <div className="olvera_about_content_sub_block">
        <div className="olvera_left_main_block">
          <div className="olvera_left_content_block">
            <h1> About Olvera</h1>
            <div className="olvera_content_for_mobile">
              <h2>Change Is The One True Constant In Business</h2>
            </div>
          </div>
        </div>
        <div className="olvera_right_main_block">
          <div className="olvera_right_content_block about_content_right_sub_c1_block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="olvera_about_logo_content_main_block">
        <div className="olvera_about_logo_block">
          <img src={Logo1} alt="about_logo" />
        </div>
        <div className="olvera_about_logo_block" style={{ height: "70px" }}>
          <img src={Logo2} alt="about_logo" />
        </div>
        <div className="olvera_about_logo_block">
          <img src={Logo3} alt="about_logo" />
        </div>
        <div className="olvera_about_logo_block">
          <img src={Logo4} alt="about_logo" />
        </div>
      </div>
    </section>
  );
}

export default AboutOlvera;
