// src/components/pictures/carusel/CaruselCorrect.jsx

import React, { useState, useRef, useEffect } from "react";
import "./CaruselAll.css";

// Загружаем все изображения из src/assets/images/portfolio
const imageModules = import.meta.glob(
  "/src/assets/images/portfolio/**/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  },
);

const images = Object.values(imageModules).map((module) => module.default);

const CaruselCorrect = ({ direction = "left" }) => {
  const caruselRef = useRef(null);
  const requestIdRef = useRef(null);
  const startPositionRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const carusel = caruselRef.current;

    if (!carusel) return;

    const animate = () => {
      if (!isPaused) {
        startPositionRef.current += direction === "left" ? -0.3 : 0.3;

        const maxScroll = carusel.scrollWidth / 2;

        if (startPositionRef.current >= maxScroll) {
          startPositionRef.current = 0;
        } else if (startPositionRef.current <= 0) {
          startPositionRef.current = maxScroll;
        }

        carusel.scrollLeft = startPositionRef.current;
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [direction, isPaused]);

  return (
    <div
      className="carusel-container"
      ref={caruselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carusel-content">
        {images.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt={`image-${index}`}
            className="carusel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}

        {images.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt={`image-copy-${index}`}
            className="carusel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-window-image" onClick={closeModal}>
          <div
            className="modal-image-inner"
            onClick={(e) => e.stopPropagation()}
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
      )}
    </div>
  );
};

export default CaruselCorrect;
