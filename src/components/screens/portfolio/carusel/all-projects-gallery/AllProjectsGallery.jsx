// src/components/pictures/carusel/AllGallery.jsx
import { useApp } from "@/context/AppContext";

import styles from "./AllProjectsGallery.module.css";
import CaruselCorrect from "../CaruselCorrect";

const AllProjectsGallery = () => {
  const { isMobile } = useApp();

  return (
    <div
      // style={{ pointerEvents: isMobile ? "none" : "" }}
      // className={styles.carouselWrapper}
      className={`${styles.carouselWrapper} ${isMobile ? styles.mobile : ""}`}
    >
      <CaruselCorrect direction="left" />
      <CaruselCorrect direction="right" />
    </div>
  );
};

export default AllProjectsGallery;
