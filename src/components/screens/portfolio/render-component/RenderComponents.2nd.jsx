import { useState } from "react";
import { useApp } from "@/context/AppContext";

import styles from "./RenderComponent.module.css";

import AllProjectsGallery from "@/components/screens/portfolio/carusel/all-projects-gallery/AllProjectsGallery";
import Banners from "@/components/screens/portfolio/carusel/banners/Banners";
import InstagramStories from "@/components/screens/portfolio/carusel/instagram/InstagramStories";
import YoutubeDesign from "@/components/screens/portfolio/carusel/youtube/YoutubeDesign";
import YoutubeThumbnails from "@/components/screens/portfolio/carusel/youtube/YoutubeThumbnails";

function RenderComponents({ texts }) {
  const { isMobile } = useApp();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderComponent = () => {
    switch (selectedCategory) {
      case "All":
        return <AllProjectsGallery texts={texts} />;
      case "Banners":
        return <Banners texts={texts} />;
      case "InstagramStories":
        return <InstagramStories texts={texts} />;
      case "YoutubeDesign":
        return <YoutubeDesign texts={texts} />;
      case "YoutubeThumbnails":
        return <YoutubeThumbnails texts={texts} />;

      default:
        return <AllProjectsGallery texts={texts} />;
    }
  };

  return (
    <>
      <div className={`${isMobile ? styles.filterScrollbar : ""}`}>
        <div className={styles.categoryFilters}>
          <p
            className={`${styles.category} ${selectedCategory === "All" ? styles.selected : ""} ${isMobile ? "mobile" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            {texts.portfolioa_all}
          </p>
          <p
            className={`${styles.category} ${selectedCategory === "Banners" ? styles.selected : ""} ${isMobile ? "mobile" : ""}`}
            onClick={() => setSelectedCategory("Banners")}
          >
            {texts.port_banners}
          </p>
          <p
            className={`${styles.category} ${selectedCategory === "InstagramStories" ? styles.selected : ""} ${isMobile ? "mobile" : ""}`}
            onClick={() => setSelectedCategory("InstagramStories")}
          >
            {texts.port_st_instagram}
          </p>
          <p
            className={`${styles.category} ${selectedCategory === "YoutubeDesign" ? styles.selected : ""} ${isMobile ? "mobile" : ""}`}
            onClick={() => setSelectedCategory("YoutubeDesign")}
          >
            {texts.port_des_youtube}
          </p>
          <p
            className={`${styles.category} ${selectedCategory === "YoutubeThumbnails" ? styles.selected : ""} ${isMobile ? "mobile" : ""}`}
            onClick={() => setSelectedCategory("YoutubeThumbnails")}
          >
            {texts.port_pre_youtube}
          </p>
        </div>
      </div>
      <div className={styles.galleryContent}>{renderComponent()}</div>
    </>
  );
}

export default RenderComponents;
