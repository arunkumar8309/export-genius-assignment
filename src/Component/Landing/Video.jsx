import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Video() {
  const [popupshow, setPopup] = useState(false);
  function togglePopupVisibility() {
    if (popupshow) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  }
  return (
    <>
      {/* popup */}
      {popupshow && (
        <section className="video_popup_main_section">
          <div className="popup_video_play_main_block">
            <div className="croos_icon_block">
              <FaTimes
                style={{
                  width: "30px",
                  height: "30px",
                  border: "1px solid black",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => togglePopupVisibility()}
              />
            </div>
            <div className="video_content_block_popup">
              <video
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                controls
                autoPlay
              ></video>
            </div>
          </div>
        </section>
      )}

      <section className="video_section_banner_block" id="video">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          style={{ cursor: "pointer" }}
          onClick={() => togglePopupVisibility()}
        >
          <path
            d="M60 0C44.0868 0 28.8259 6.32138 17.5739 17.5739C6.32138 28.8255 0 44.0873 0 60C0 75.9127 6.32138 91.1741 17.5739 102.426C28.8255 113.679 44.0873 120 60 120C75.9127 120 91.1741 113.679 102.426 102.426C113.679 91.1745 120 75.9127 120 60C120 49.4684 117.228 39.1214 111.962 30.0002C106.695 20.879 99.1214 13.3053 89.9998 8.03823C80.8786 2.77241 70.5316 0 60 0ZM79.2095 61.6238L50.1654 78.3924C49.5854 78.7273 48.8705 78.7273 48.2904 78.3924C47.7104 78.0576 47.3529 77.4382 47.3529 76.7686V43.2309C47.3529 42.5613 47.7104 41.9419 48.2904 41.6071C48.8705 41.2714 49.5854 41.2714 50.1654 41.6071L79.2095 58.3765V58.3757C79.7896 58.7105 80.147 59.3299 80.147 59.9996C80.147 60.6692 79.7896 61.2886 79.2095 61.6234V61.6238Z"
            fill="white"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default Video;
