// src/components/pictures/carusel/Banners.jsx

import React, { useState } from "react";
import styles from "./Banners.module.css";

// Vite import всех картинок
const imageModules = import.meta.glob(
  "/src/assets/images/portfolio/banners/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
    import: "default",
  },
);

const imageBanners = Object.values(imageModules);

const Banners = ({ texts }) => {
  const [visibleRows, setVisibleRows] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesPerRow = 4;

  const visibleCount = visibleRows * imagesPerRow;
  const visibleImages = imageBanners.slice(0, visibleCount);

  const showMoreImages = () => {
    setVisibleRows((prev) => prev + 2);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.banners}>
      <div className={styles.imageGrid}>
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="banner"
            className={styles.images}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {visibleCount < imageBanners.length && (
        <button
          className={styles.showMore}
          onClick={showMoreImages}
          type="button"
        >
          {texts.show_more}
        </button>
      )}

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="selected"
              className={styles.openImage}
            />
            <button className={styles.close} onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banners;
