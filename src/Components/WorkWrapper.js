import { Typography } from "@mui/material";
import React from "react";
import Weddings from "./Weddings";

const WorkWrapper = () => {
  return (
    <div className="workIDo">
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Amiri" }}
      >
        What I Do
      </Typography>
      <Weddings />
    </div>
  );
};

export default WorkWrapper;
