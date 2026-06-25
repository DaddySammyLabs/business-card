import React from "react";

import styles from "./HeroMobile.module.css";

import heroimage from "../../../assets/images/Sun_moon-pana.png";
import Animation from "../../animation/AnimationHoverResponsive";

const HeroMobile = ({ texts }) => {
  return (
    <>
      <div className={styles.heroMobile}>
        <Animation titleImage={heroimage} number="first" />

        <div className={styles.info}>
          <h1>
            {texts.hero_title}
            <span className={styles.author}>{texts.author}</span>
          </h1>
          <h2>
            {texts.Ido}
            <span className={styles.violetText}>
              {texts.hero_subtitle_part2}{" "}
            </span>
            {texts.hero_subtitle_part3}
            <br />
            <span className={styles.violetText}>
              {texts.hero_subtitle_part4}
            </span>
            <br />
            {texts.hero_subtitle_part5}
          </h2>
          <h3>{texts.hero_info}</h3>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
