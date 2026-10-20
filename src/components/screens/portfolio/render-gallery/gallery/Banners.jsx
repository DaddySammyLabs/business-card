import React from "react";
import { useImages } from "@/hooks/useImages";
import ImageGallery from "@/components/ui/images/image-gallery/ImageGallery";

const Banners = ({ texts, gallerySrc = "portfolio/banners" }) => {
  // const images = useImages("portfolio/banners");
  const images = useImages(gallerySrc);

  return <ImageGallery images={images} texts={texts} alt="banner" />;
};

export default Banners;
