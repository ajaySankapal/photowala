import { Typography } from "@mui/material";
import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="overline">photowala</Typography>

      <Typography variant="body" className="footer-txt">
        made with
        <BsFillHeartFill
          style={{
            color: "red",
            margin: "0 5px 0 5px",
          }}
        />
        in India
      </Typography>
    </div>
  );
};

export default Footer;
