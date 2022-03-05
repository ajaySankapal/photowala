import { Typography } from "@mui/material";
import React from "react";

const Navbar = ({ setSidebar }) => {
  return (
    <div className="sidebar">
      <Typography className="menu-h">Menu</Typography>
      <div className="menu">
        <a href="#landing-page">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#connect">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
