// src/components/pictures/carusel/BannersFirst.jsx

import React, { useState, useRef, useEffect } from "react";

import "./BannersFirst.css";

// const imageBanners = import.meta.glob(
//   "/src/assets/images/portfolio/banners/*.{png,jpg,jpeg,svg}",
//   {
//     eager: true,
//   },
// );
const imageBanners = Object.values(
  import.meta.glob(
    "/src/assets/images/portfolio/banners/*.{png,jpg,jpeg,svg}",
    { eager: true },
  ),
).map((module) => module.default);

const Banners = () => {
  const [visibleRows, setVisibleRows] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerRow = 4;

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showMoreImages = () => {
    setVisibleRows(visibleRows + 2);
  };

  const renderImages = () => {
    const visibleImages = imageBanners.slice(0, visibleRows * imagesPerRow);
    return visibleImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt="banners"
        className="banner-images"
        onClick={() => setSelectedImage(image)}
      />
      // className="gallery-image"
    ));
  };
  // className="image-gallery"
  return (
    <div className="banner-gallery">
      <div className="image-grid">{renderImages()}</div>
      {visibleRows * imagesPerRow < imageBanners.length && (
        <button onClick={showMoreImages} name="show-more-images">
          More<span className="more-icon"></span>
        </button>
      )}
      {
        <div className="modal-window-image" onClick={closeModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-image-inner"
          >
            <img src={selectedImage} alt="selected" className="modal-image" />
            <button
              type="button"
              className="image-close-button"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Banners;
