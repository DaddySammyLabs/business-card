/* src/components/picture/Portfolio.jsx */

import { useState } from "react";

import "./Portfolio.css";

import wand from "../../assets/icons/wand.svg";

import AllGallery from "./carusel/AllGallery";
import Banners from "./carusel/Banners";
import InstagramStories from "./carusel/InstagramStories";
import YoutubeDesign from "./carusel/YoutubeDesign";
import YoutubeThumbnails from "./carusel/YoutubeThumbnails";

function Portfolio({ texts }) {
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
      <div className="portfolio" draggable={false}>
        <div className="portfolio-first">
          <h1 className="portfolio-title">{texts.portfolio}</h1>
          <div className="title-echo1">
            <p className="echo-part1"></p>
            <p className="title-border">{texts.portfolio_part1}</p>
          </div>
          <div className="title-echo2">
            <p className="echo-part2"></p>
            <p className="title-border">{texts.portfolio_part2}</p>
          </div>
          <img
            className="portfolio-icon"
            src={wand}
            alt="Wand"
            draggable={false}
          ></img>
        </div>
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
        {/* portfolio-block */}
      </div>
    </>
  );
}

export default Portfolio;
