import React, { Fragment } from "react";
import Service from "./Service";
import Career from "./Career";
import OlveraGuide from "./OlveraGuide";
import AboutOlvera from "./AboutOlvera";
import VideoComponent from "./Video";
import AboutUs from "./AboutUs";
import "./IndexStyle.css";
function Index() {
  return (
    <Fragment>
      {/* Banner code start */}
      <section className="landing_banner_main_block" id="Home">
        <div className="landing_banner_content_main_block">
          <div className="landing_banner_content_block">
            <h1>Start Your story With Olvera</h1>
            <button>CONTACT US</button>
          </div>
        </div>
      </section>

      {/* Banner code End */}

      {/* Component call */}
      <AboutOlvera />
      <Service />
      <OlveraGuide />
      <Career />
      <VideoComponent />
      <AboutUs />
    </Fragment>
  );
}

export default Index;
