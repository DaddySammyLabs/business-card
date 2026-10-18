import { useState } from "react";
import "./RenderComponent.css";

import AllGallery from "@/components/screens/portfolio/carusel/all-projects-gallery/AllProjectsGallery";
import Banners from "@/components/screens/portfolio/carusel/banners/Banners";
import InstagramStories from "@/components/screens/portfolio/carusel/instagram/InstagramStories";
import YoutubeDesign from "@/components/screens/portfolio/carusel/youtube/YoutubeDesign";
import YoutubeThumbnails from "@/components/screens/portfolio/carusel/youtube/YoutubeThumbnails";

function RenderComponent({ texts }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderComponent = () => {
    switch (selectedCategory) {
      case "All":
        return <AllGallery texts={texts} />;
      case "Banners":
        return <Banners texts={texts} />;
      case "InstagramStories":
        return <InstagramStories texts={texts} />;
      case "YoutubeDesign":
        return <YoutubeDesign texts={texts} />;
      case "YoutubeThumbnails":
        return <YoutubeThumbnails texts={texts} />;

      default:
        return <AllGallery texts={texts} />;
    }
  };

  return (
    <>
      {/* <div className="portfolio" draggable={false}> */}

      <div className="render-component-container">
        <p
          className={`tag ${selectedCategory === "All" ? "selected" : ""}`}
          onClick={() => setSelectedCategory("All")}
        >
          {texts.portfolioa_all}
        </p>
        <p
          className={`tag ${selectedCategory === "Banners" ? "selected" : ""}`}
          onClick={() => setSelectedCategory("Banners")}
        >
          {texts.port_banners}
        </p>
        <p
          className={`tag ${selectedCategory === "InstagramStories" ? "selected" : ""}`}
          onClick={() => setSelectedCategory("InstagramStories")}
        >
          {texts.port_st_instagram}
        </p>
        <p
          className={`tag ${selectedCategory === "YoutubeDesign" ? "selected" : ""}`}
          onClick={() => setSelectedCategory("YoutubeDesign")}
        >
          {texts.port_des_youtube}
        </p>
        <p
          className={`tag ${selectedCategory === "YoutubeThumbnails" ? "selected" : ""}`}
          onClick={() => setSelectedCategory("YoutubeThumbnails")}
        >
          {texts.port_pre_youtube}
        </p>
      </div>
      <div className="content">{renderComponent()}</div>

      {/* </div> */}
    </>
  );
}

export default RenderComponent;
