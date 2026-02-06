import React, { useState } from "react";
import "./../styles/youtube.css";

// ✅ import รูปทั้งหมด
import img1 from "./../assets/1.jpg";
import img2 from "./../assets/2.jpg";
import img3 from "./../assets/3.jpg";
import img4 from "./../assets/4.jpg";
import img5 from "./../assets/5.jpg";
import img6 from "./../assets/6.jpg";
import img7 from "./../assets/7.jpg";
import img8 from "./../assets/8.jpg";
import img9 from "./../assets/9.jpg";
import img10 from "./../assets/10.jpg";
import img11 from "./../assets/11.jpg";
import img12 from "./../assets/12.jpg";
import img13 from "./../assets/13.jpg";
import img14 from "./../assets/14.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14
];

const Youtube: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="section youtube">
      <h2>
        <span className="youtube-title-yellow">MSMOON</span>{" "}
        <span className="youtube-title-white">Gallery</span>
      </h2>

      {/* ✅ Slide Images (ทีละรูปเดียว + ปุ่มลูกศร) */}
      <div className="slider-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />

        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Youtube;
