import React from "react";
import CareerImage from "./../../Assets/Images/career.webp";

function Career() {
  return (
    <>
      <section className="career_main_section" id="career">
        <div className="career_content_main_block">
          <div className="career_content_block">
            <h1>CAREERS</h1>
            <h2>Careers at Olvera</h2>
            <p>
              Navigate change, develop on-demand skills. Your turnaround journey
              starts with Olvera.
            </p>
            <button className="career_btn">Search Careers</button>
          </div>
        </div>
        <div className="career_image_main_block">
          <div className="career_image_block">
            <img src={CareerImage} alt="Career_image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
