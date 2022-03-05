import React from "react";
import img1 from "../img/img_portraits/pro_portraits_1.jpg";
import img2 from "../img/img_portraits/pro_portraits_2.jpg";
import img3 from "../img/img_portraits/pro_portraits_3.jpg";
import img4 from "../img/img_portraits/pro_portraits_4.jpg";
import img5 from "../img/img_portraits/pro_portraits_5.jpg";
import img6 from "../img/img_portraits/pro_portraits_6.jpg";
const Portraits = ({ setSelectedImg }) => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="img-grid">
      {images.map((img) => {
        return (
          <div className="img-wrap" onClick={() => setSelectedImg(img)}>
            <img src={img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Portraits;
