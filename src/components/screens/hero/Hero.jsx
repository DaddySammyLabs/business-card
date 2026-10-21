import styles from "./Hero.module.css";
import useResize from "@/hooks/useResize";
import image from "@/assets/images/Sun_moon-pana.png";

import HeroMobile from "./hero-mobile/HeroMobile";

// import Animation from "@/components/animation/AnimationHoverResponsive";
import Animation from "@/components/ui/animation/hover-responsive/floating-image/FloatingImage";

// import ThemeSwitcher from "../components/theme/ThemeSwitcher";

function Hero({ texts }) {
  const isMobile = useResize();

  return (
    <>
      {!isMobile ? (
        <div className={styles.hero}>
          <div className={styles.info}>
            <h1>
              {texts.hero_title}
              <span className={styles.author}>{texts.author}</span>
            </h1>
            <h2>
              {texts.Ido}
              <span className={styles.markedText}>
                {texts.hero_subtitle_part2}{" "}
              </span>
              {texts.hero_subtitle_part3}
              <br />
              <span className={styles.markedText}>
                {texts.hero_subtitle_part4}
              </span>
              <br />
              {texts.hero_subtitle_part5}
            </h2>
            <h3>{texts.hero_info}</h3>
          </div>
          <div className={styles.image}></div>
          <Animation image={image} number="first" />
        </div>
      ) : (
        <HeroMobile texts={texts} />
      )}
    </>
  );
}

export default Hero;
