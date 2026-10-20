import { useState } from "react";
import { useApp } from "@/context/AppContext";

import styles from "./RenderComponent.module.css";

import DoubleCarousel from "@/components/ui/images/carousel/double-carusel/DoubleCarousel";
import Banners from "@/components/screens/portfolio/render-gallery/gallery/Banners";
import InstagramStories from "@/components/screens/portfolio/render-gallery/gallery/InstagramStories";
import YoutubeDesign from "@/components/screens/portfolio/render-gallery/gallery/youtube/YoutubeDesign";
import YoutubeThumbnails from "@/components/screens/portfolio/render-gallery/gallery/youtube/YoutubeThumbnails";

function RenderComponents({ texts }) {
  const { isMobile } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", label: texts.portfolioa_all },
    { id: "Banners", label: texts.port_banners },
    { id: "InstagramStories", label: texts.port_st_instagram },
    { id: "YoutubeDesign", label: texts.port_des_youtube },
    { id: "YoutubeThumbnails", label: texts.port_pre_youtube },
  ];

  const components = {
    All: DoubleCarousel,
    Banners,
    InstagramStories,
    YoutubeDesign,
    YoutubeThumbnails,
  };

  const SelectedComponent = components[selectedCategory] || DoubleCarousel;

  return (
    <>
      <div className={isMobile ? styles.filterScrollbar : ""}>
        <div className={styles.categoryFilters}>
          {categories.map(({ id, label }) => (
            <p
              key={id}
              className={[
                styles.category,
                selectedCategory === id && styles.selected,
                isMobile && "mobile",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setSelectedCategory(id)}
            >
              {label}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.galleryContent}>
        <SelectedComponent texts={texts} />
      </div>
    </>
  );
}

export default RenderComponents;
