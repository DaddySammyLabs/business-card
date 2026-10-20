// src/components/pictures/carousel/Carousel.jsx

import useCarousel from "@/hooks/useCarousel";

import { useImages } from "@/hooks/useImages";
import ImageModal from "@/components/ui/images/image-modal/ImageModal";

import styles from "./Carousel.module.css";

const Carousel = ({ direction, gallerySrc = "portfolio" }) => {
  // const images = useImages("portfolio");
  const images = useImages(gallerySrc);

  const {
    caruselRef,
    isPaused,
    setIsPaused,
    selectedImage,
    setSelectedImage,
    closeModal,
  } = useCarousel({ images, direction });

  return (
    <div
      className={styles.carousel}
      ref={caruselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.content}>
        {images.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt={`image-${index}`}
            className={styles.image}
            onClick={() => setSelectedImage(image)}
          />
        ))}

        {images.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt={`image-copy-${index}`}
            className={styles.image}
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

export default Carousel;
