import React from "react";
// import ImageGallery from "react-image-gallery";
import img1 from "../img/img_wedding/pro_wedding_1.jpg";
import img2 from "../img/img_wedding/pro_wedding_2.jpg";
import img3 from "../img/img_wedding/pro_wedding_3.jpg";
import img4 from "../img/img_wedding/pro_wedding_4.jpg";
import img5 from "../img/img_wedding/pro_wedding_5.jpg";
import img6 from "../img/img_wedding/pro_wedding_6.jpg";
// import SimpleImageSlider from "react-simple-image-slider";

const Weddings = () => {
  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img5 },
    { url: img6 },
  ];
  // const nu = [1, 2, 3];
  return (
    <div className="s-img-wrap">
      {/* Weddings */}
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      {/* <img src={img} alt="" /> */}
      {images.map((img) => {
        <div className="img-wrap">
          <img src={img.url} alt="" />
        </div>;
      })}
    </div>
  );
};

export default Weddings;
