import { Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "./Modal";
import Portraits from "./Portraits";
import Street from "./Street";
import Weddings from "./Weddings";

const WorkWrapper = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="workIDo" id="work">
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Amiri" }}
      >
        <span>What I Do</span>
      </Typography>
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "Amiri",
          fontSize: "1.4rem",
          padding: "1.2rem",
        }}
      >
        Wedding Photography
      </span>
      <Weddings setSelectedImg={setSelectedImg} />
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "Amiri",
          fontSize: "1.4rem",
          padding: "1.2rem",
        }}
      >
        Portraits
      </span>
      <Portraits setSelectedImg={setSelectedImg} />
      <span
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "Amiri",
          fontSize: "1.4rem",
          padding: "1.2rem",
        }}
      >
        Street Photography
      </span>
      <Street setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default WorkWrapper;
