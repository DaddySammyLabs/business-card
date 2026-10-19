import React from "react";
import { useImages } from "@/hooks/useImages";
import ImageGallery from "@/components/ui/images/image-gallery/ImageGallery";

const InstagramStories = ({ texts }) => {
  const images = useImages("portfolio/instagram");

  return <ImageGallery images={images} texts={texts} alt="banner" />;
};

export default InstagramStories;

// import React from "react";
// import "../banners/Banners.css";
// import { useImages } from "@/hooks/useImages";
// import { useImageGallery } from "@/hooks/useImageGallery";
// import ImageModal from "@/components/ui/modal/image-modal/ImageModal";
// import ShowMore from "@/components/ui/buttons/show-more-hide/showmore/ShowMore";

// const InstagramStories = ({ texts }) => {
//   const images = useImages("portfolio/instagram");

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
//             alt="Instagram story"
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

// export default InstagramStories;
