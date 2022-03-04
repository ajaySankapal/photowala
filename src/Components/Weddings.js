import React from "react";
// import ImageGallery from "react-image-gallery";
import img1 from "../img/img_wedding/pro_wedding_1.jpg";
import img2 from "../img/img_wedding/pro_wedding_6.jpg";
import img3 from "../img/img_wedding/pro_wedding_3.jpg";
import img4 from "../img/img_wedding/pro_wedding_4.jpg";
import img5 from "../img/img_wedding/pro_wedding_7.jpg";
import img6 from "../img/img_wedding/pro_wedding_8.jpg";
// import SimpleImageSlider from "react-simple-image-slider";

const Weddings = ({ setSelectedImg }) => {
  const images = [
    // { url: img1 },
    // { url: img6 },
    // { url: img3 },
    // { url: img4 },
    // { url: img2 },
    // { url: img5 },
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];
  // const nu = [1, 2, 3];
  return (
    <div className="s-img-wrap">
      {images.map((img) => {
        return (
          <div
            className="img-wrap"
            // key={new Date().getTime()}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Weddings;
