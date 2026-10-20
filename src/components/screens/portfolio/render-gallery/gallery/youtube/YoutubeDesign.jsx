import React from "react";
import { useImages } from "@/hooks/useImages";
import ImageGallery from "@/components/ui/images/image-gallery/ImageGallery";

const YoutubeDesign = ({ texts }) => {
  const images = useImages("portfolio");

  return <ImageGallery images={images} texts={texts} alt="banner" />;
};

export default YoutubeDesign;

// import React from "react";
// import "../banners/Banners.css";
// import { useImages } from "@/hooks/useImages";
// import { useImageGallery } from "@/hooks/useImageGallery";
// import ImageModal from "@/components/ui/modal/image-modal/ImageModal";
// import ShowMore from "@/components/ui/buttons/show-more-hide/showmore/ShowMore";

// const YoutubeDesign = ({ texts }) => {
//   const images = useImages("portfolio");

//   const {
//     visibleImages,
//     hasMore,
//     selectedImage,
//     showMore,
//     openImage,
//     closeImage,
//   } = useImageGallery(images);

//   return (
//     <div className="banner-gallery">
//       <div className="image-grid">
//         {visibleImages.map((image, index) => (
//           <img
//             key={image}
//             src={image}
//             alt="YouTube design"
//             className="banner-images"
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

// export default YoutubeDesign;
