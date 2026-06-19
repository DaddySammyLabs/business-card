// src/components/animation/ImageBox.sjx

// import "./ImageBox.css";
import "./ImageUpDown.css";
// import "./ImageAnimation.css";
// import hero from "../assets/images/hero.png";

function ImageBox({ titleImage, number }) {
  return (
    <>
      <div className="main-image-box">
        <img
          //   className="first-image-layer"
          className={`${number}-image-layer hero-image`}
          src={titleImage}
          alt="image-animation"
          draggable={false}
        />
      </div>
    </>
  );
}

export default ImageBox;
