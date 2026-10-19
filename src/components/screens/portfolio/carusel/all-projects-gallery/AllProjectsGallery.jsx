// src/components/pictures/carusel/AllGallery.jsx
import { useApp } from "@/context/AppContext";

import styles from "./AllProjectsGallery.module.css";
import Carusel from "../Carusel";

const AllProjectsGallery = () => {
  const { isMobile } = useApp();

  return (
    <div
      // className={`${styles.carouselWrapper} ${isMobile ? styles.mobile : ""}`}
      className={`${styles.carouselWrapper} `}
    >
      <Carusel direction="left" />
      <Carusel direction="right" />
    </div>
  );
};

export default AllProjectsGallery;
