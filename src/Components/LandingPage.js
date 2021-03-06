import React, { useState } from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import { FaBars, FaArrowCircleDown } from "react-icons/fa";
import background from "../img/img_street/avatar1.jpg";
import Navbar from "./Sidebar";
const LandingPage = ({ setSidebar, sidebar }) => {
  return (
    <section className="l-page" id="landing-page">
      <div
        className="toggle"
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        <FaBars className="fa-bars"></FaBars>

        {/* {!showNavbar && <Navbar />} */}
      </div>
      {/* <Navbar /> */}
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
        <a href="#about" style={{ textDecoration: "none", color: "#fff" }}>
          <FaArrowCircleDown />
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
