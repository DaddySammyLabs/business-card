import useFloatingImage from "./useFloatingImage";
import styles from "./FloatingImage.module.css";

function FloatingImage({ image }) {
  const { imageRef, handleMouseMove, handleMouseLeave } = useFloatingImage();

  return (
    <div
      className={styles.animation}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        className={styles.image}
        src={image}
        alt="image"
        draggable={false}
      />
    </div>
  );
}

export default FloatingImage;
