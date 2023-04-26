import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import EarthVideo from "../assets/Earth.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={EarthVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy Travel</h1>
        <p>Worlds First Commercial Space Travel.</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
