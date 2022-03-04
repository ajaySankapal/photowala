import { Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "./Modal";
import Weddings from "./Weddings";

const WorkWrapper = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="workIDo">
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontFamily: "Amiri" }}
      >
        What I Do
      </Typography>
      <Weddings setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default WorkWrapper;
