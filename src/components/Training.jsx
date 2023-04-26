import React from "react";
import "./Training.css";

import { Link } from "react-router-dom";

import sat from "../assets/sat.jpg";
import moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in
          mollitia odio voluptas cumque molestiae eius quos, est quod et? Ab,
          ullam! Aspernatur illo nihil dolores? Labore sit atque perspiciatis.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={sat} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
