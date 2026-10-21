import styles from "./HeroMobile.module.css";
import { useApp } from "@/context/AppContext";

import image from "@/assets/images/Sun_moon-pana.png";
import Animation from "@/components/ui/animation/hover-responsive/floating-image/FloatingImage";

const HeroMobile = ({ texts }) => {
  const { openModal } = useApp();
  return (
    <>
      <div className={styles.heroMobile}>
        <Animation image={image} number="first" />

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
          <h3 onClick={openModal}>{texts.hero_info}</h3>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
