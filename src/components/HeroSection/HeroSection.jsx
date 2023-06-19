import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import video2 from "../../assets/videos/video-1.mp4";
import Button from "../Button/Button";

const Video = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getButtonSize = () => {
    if (windowWidth <= 960) {
      return "btn--small";
    } else {
      return "btn--large";
    }
  };

  const getButtonTextSize = () => {
    if (windowWidth <= 960) {
      return "btn-text--small";
    } else {
      return "btn-text--large";
    }
  };

  return (
    <div className="video-container">
      <div className="video-overlay"></div>
      <video className="video" autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      <div className="button-container">
        <Button buttonStyle="btn--outline" buttonSize={getButtonSize()}>
          <span className={getButtonTextSize()}>GET STARTED</span>
        </Button>
        <Button buttonStyle="btn--primary" buttonSize={getButtonSize()}>
          <span className={getButtonTextSize()}>WATCH TRAILER</span>
        </Button>
      </div>
    </div>
  );
};

export default Video;
