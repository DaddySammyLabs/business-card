// src/components/pictures/carusel/AllGallery.jsx
import { useApp } from "@/context/AppContext";

import styles from "./DoubleCarusel.module.css";
import Carusel from "../Carusel";

const DoubleCarusel = () => {
  const { isMobile } = useApp();

  return (
    <div
      className={`${styles.carouselWrapper} ${isMobile ? styles.mobile : ""}`}
    >
      <Carusel direction="left" />
      <Carusel direction="right" />
    </div>
  );
};

export default DoubleCarusel;
