// src/components/pictures/carusel/CaruselAllexperiment.jsx
//  Experiment version - commented

import React, { useState, useRef, useEffect } from "react";
import "./CaruselAll.css";

// Загружаем все изображения из src/assets/images
const imageModules = import.meta.glob(
  "/src/assets/images/portfolio/**/*.{png,jpg,jpeg,svg}",

  {
    eager: true,
  },
);

const images = Object.values(imageModules).map((module) => module.default);

const CaruselAll = ({ direction = "left" }) => {
  const caruselRef = useRef(null);
  const requestIdRef = useRef(null);
  const startPositionRef = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const carusel = caruselRef.current;

    if (!carusel) return;

    const animate = () => {
      if (isHovered) {
        startPositionRef.current += direction === "left" ? -0.3 : 0.3;

        const maxScroll = carusel.scrollWidth / 2;

        if (startPositionRef.current >= maxScroll) {
          startPositionRef.current = 0;
        } else if (startPositionRef.current <= 0) {
          startPositionRef.current = maxScroll;
        }

        // scrollWidth менять нельзя!
        carusel.scrollLeft = startPositionRef.current;
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [direction, isHovered]);

  return (
    <div
      className="carusel-container"
      ref={caruselRef}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
    >
      <div className="carusel-content">
        {images.map((image, index) => (
          <img
            key={`first-${index}`}
            src={image}
            alt={`image-${index}`}
            className="carusel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}

        {images.map((image, index) => (
          <img
            key={`second-${index}`}
            src={image}
            alt={`image-copy-${index}`}
            className="carusel-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal-window-image" onClick={closeModal}>
          <div
            className="modal-image-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="selected" className="modal-image" />

            <button
              onClick={closeModal}
              className="image-close-button"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaruselAll;

// // importAll - allCategories
// import React, { useState, useRef, useEffect } from "react";

// import "./CaruselAll.css";

// const importAll = (r) => r.keys().map(r);
// const images = importAll(
//   require.context("@/assets/images", false, /\.(png|jpe?g|svg)$/),
// );

// const CaruselAll = ({ direction }) => {
//   const caruselRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const requestIdRef = useRef(null);
//   const startPositionRef = useRef(0);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   useEffect(() => {
//     const carusel = caruselRef.current;

//     const animate = () => {
//       if (isHovered) {
//         startPositionRef.current += direction === "left" ? -0.3 : 0.3;
//         if (startPositionRef.current >= carusel.scrollWidth / 2) {
//           startPositionRef.current = 0;
//         } else if (startPositionRef.current <= 0) {
//           startPositionRef.current = carusel.scrollWidth / 2;
//         }
//         carusel.scrollWidth = startPositionRef.current;
//       }
//       requestIdRef.current = requestAnimationFrame(animate);
//     };
//     requestIdRef.current = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(requestIdRef.current);
//   }, [direction, isHovered]);

//   return (
//     <div
//       className="carusel-container"
//       ref={caruselRef}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="carusel-content">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className="carusel-image"
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className="carusel-image"
//             onClick={() => setSelectedImage(image)}
//           />
//         ))}
//       </div>
//       {selectedImage && (
//         <div className="modal-window-image" onClick={closeModal}>
//           <div
//             className="modal-image-inner"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img src={selectedImage} alt="image" className="modal-image" />
//             <span>
//               <button
//                 onClick={closeModal}
//                 className="image-close-button"
//                 type="button"
//               ></button>
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CaruselAll;
