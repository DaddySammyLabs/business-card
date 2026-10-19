import React from "react";
import styles from "./ImageModal.module.css";
// import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useApp } from "@/context/AppContext";

const ImageModal = ({ image, closeImage }) => {
  //   useEscapeKey(Boolean(image), closeImage);
  const { isMobile } = useApp();

  if (!image) return null;

  return (
    <div
      className={`${styles.modal} ${isMobile ? styles.mobile : ""}`}
      onClick={closeImage}
    >
      <div
        className={styles.inner}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={image} alt="Selected image" className={styles.openImage} />

        <button
          className={styles.close}
          onClick={closeImage}
          type="button"
          aria-label="Close image"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
