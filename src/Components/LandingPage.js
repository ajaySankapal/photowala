import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import { FaBars, FaArrowCircleDown } from "react-icons/fa";
import background from "../img/img_street/avatar1.jpg";
const LandingPage = () => {
  return (
    <section className="l-page">
      <div className="toggle">
        <FaBars></FaBars>
      </div>
      <div className="landing-page">
        <div className="info">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
          <Typography variant="h3" className="heading">
            Photowala
          </Typography>
        </div>
        <div className="niche">
          <span id="wed"> Wedding</span>
          <span className="pipe">|</span>
          <span id="portrait">Portrait </span>
          <span className="pipe">|</span>
          <span id="street"> Street</span>
        </div>
      </div>
      <div className="down-arr">
        <FaArrowCircleDown />
      </div>
    </section>
  );
};

export default LandingPage;
