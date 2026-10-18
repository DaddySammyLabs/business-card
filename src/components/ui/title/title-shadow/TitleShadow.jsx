import wand from "@/assets/icons/wand.svg";
import styles from "./TitleShadow.module.css";

import { useApp } from "@/context/AppContext";

const TitleShadow = ({ texts }) => {
  const { isMobile } = useApp();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{texts.portfolio}</h1>

      <div className={styles.titlePart1}>
        <p className={styles.titleBorder}>
          {isMobile ? texts.portfolio_part1.slice(0, 3) : texts.portfolio_part1}
        </p>
      </div>

      <div className={styles.titlePart2}>
        <p className={styles.titleBorder}>
          {isMobile ? texts.portfolio_part2.slice(-3) : texts.portfolio_part2}
        </p>
      </div>

      <img
        className={styles.icon}
        src={wand}
        alt=""
        aria-hidden="true"
        draggable={false}
      />
    </div>
  );
};

export default TitleShadow;
