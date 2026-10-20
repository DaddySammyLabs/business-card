import React from "react";
import styles from "./ImageGallery.module.css";
import { useApp } from "@/context/AppContext";

import { useImageGallery } from "@/hooks/useImageGallery";
import ImageModal from "@/components/ui/images/image-modal/ImageModal";
import ShowMore from "@/components/ui/buttons/show-more-hide/showmore/ShowMore";

const ImageGallery = ({ images = [], texts, alt = "image" }) => {
  const { isMobile } = useApp();
  const imagesGrid = { initialRows: 1, imagesPerRow: 3, rowsStep: 1 };

  const {
    visibleImages,
    hasMore,
    selectedImage,
    showMore,
    openImage,
    closeImage,
  } = useImageGallery(images, isMobile && imagesGrid);

  return (
    <div className={styles.gallery}>
      <div className={styles.imageGrid}>
        {visibleImages.map((image) => (
          <img
            key={image}
            src={image}
            alt={alt}
            className={styles.image}
            onClick={() => openImage(image)}
          />
        ))}
      </div>

      {hasMore && <ShowMore texts={texts} showMoreImages={showMore} />}

      {selectedImage && (
        <ImageModal image={selectedImage} closeImage={closeImage} />
      )}
    </div>
  );
};

export default ImageGallery;
