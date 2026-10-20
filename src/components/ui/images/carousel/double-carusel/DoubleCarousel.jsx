// src/components/ui/carousel/DoubleCarusel.jsx
import { useApp } from "@/context/AppContext";

import styles from "./DoubleCarousel.module.css";
import Carousel from "../Carousel";

const DoubleCarousel = () => {
  const { isMobile } = useApp();

  return (
    <div
      // className={`${styles.carouselWrapper} ${isMobile ? styles.mobile : ""}`}
      className={`${styles.carouselWrapper} `}
    >
      <Carousel direction="left" gallerySrc={"portfolio"} />
      <Carousel direction="right" gallerySrc={"portfolio"} />
    </div>
  );
};

export default DoubleCarousel;
