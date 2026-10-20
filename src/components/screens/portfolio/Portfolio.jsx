import styles from "./Portfolio.module.css";

import TitleShadow from "@/components/ui/title/title-shadow/TitleShadow";
import RenderComponents from "./render-gallery/RenderComponents";

function Portfolio({ texts }) {
  return (
    <>
      <div className={styles.portfolio} draggable={false}>
        <TitleShadow texts={texts} />

        <RenderComponents texts={texts} />
      </div>
    </>
  );
}

export default Portfolio;
