import React from "react";
import { useImages } from "@/hooks/useImages";
import ImageGallery from "@/components/ui/images/image-gallery/ImageGallery";

const Gallery = ({ texts, gallerySrc = "portfolio/banners" }) => {
  // const images = useImages("portfolio/banners");
  const images = useImages(gallerySrc);

  return <ImageGallery images={images} texts={texts} alt="banner" />;
};

export default Gallery;
// Banners -> Gallery

// import React from "react";
// import styles from "./Banners.module.css";
// import { useImages } from "@/hooks/useImages";
// import { useImageGallery } from "@/hooks/useImageGallery";
// import ImageModal from "@/components/ui/modal/image-modal/ImageModal";
// import ShowMore from "@/components/ui/buttons/show-more-hide/showmore/ShowMore";

// const Banners = ({ texts }) => {
//   const images = useImages("portfolio/banners");

//   const {
//     visibleImages,
//     hasMore,
//     selectedImage,
//     showMore,
//     openImage,
//     closeImage,
//   } = useImageGallery(images);

//   return (
//     <div className={styles.banners}>
//       <div className={styles.imageGrid}>
//         {visibleImages.map((image, index) => (
//           <img
//             key={image}
//             src={image}
//             alt="banner"
//             className={styles.images}
//             onClick={() => openImage(image)}
//           />
//         ))}
//       </div>

//       {hasMore && <ShowMore texts={texts} showMoreImages={showMore} />}

//       {selectedImage && (
//         <ImageModal image={selectedImage} closeImage={closeImage} />
//       )}
//     </div>
//   );
// };

// export default Banners;
