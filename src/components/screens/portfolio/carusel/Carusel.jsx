// src/components/pictures/carusel/Carusel.jsx

import React, { useState, useRef, useEffect } from "react";

import { useApp } from "@/context/AppContext";
import useCarusel from "@/hooks/useCarusel";

import { useImages } from "@/hooks/useImages";
import ImageModal from "@/components/ui/modal/image-modal/ImageModal";

import "./CaruselAll.css";

const Carusel = ({ direction }) => {
  const images = useImages("portfolio");

  const {
    caruselRef,
    isPaused,
    setIsPaused,
    selectedImage,
    setSelectedImage,
    closeModal,
  } = useCarusel({ images, direction });

  // const caruselRef = useRef(null);
  // const requestIdRef = useRef(null);
  // const startPositionRef = useRef(0);

  // const [isPaused, setIsPaused] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

  // useEffect(() => {
  //   const carusel = caruselRef.current;

  //   if (!carusel || selectedImage || isPaused) return;

  //   let animationId;

  //   const animate = () => {
  //     const maxScroll = carusel.scrollWidth / 2;

  //     if (maxScroll > 0) {
  //       startPositionRef.current += direction === "left" ? -0.3 : 0.3;

  //       if (startPositionRef.current >= maxScroll) {
  //         startPositionRef.current = 0;
  //       } else if (startPositionRef.current <= 0) {
  //         startPositionRef.current = maxScroll;
  //       }

  //       carusel.scrollLeft = startPositionRef.current;
  //     }

  //     animationId = requestAnimationFrame(animate);
  //   };

  //   animationId = requestAnimationFrame(animate);

  //   return () => {
  //     cancelAnimationFrame(animationId);
  //   };
  // }, [direction, isPaused, selectedImage]);

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
        <ImageModal image={selectedImage} closeImage={closeModal} />
      )}
    </div>
  );
};

export default Carusel;
