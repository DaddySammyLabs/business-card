/* src/components/modal/ModalWindow.jsx */
import { useApp } from "@/context/AppContext";

import "./ModalWindow.css";
import styles from "./ModalWindow.module.css";

function ModalWindow({ children, texts }) {
  const { isOpenModal, openModal, closeModal, theme, isMobile } = useApp();

  // const [isVisible, setIsVisible] = useState(isOpen);

  // if (!isVisible) return null;

  return (
    <div
      className={`modal-backdrop ${isOpenModal ? "show" : ""}`}
      onClick={closeModal}
    >
      <div style={{ scale: isMobile ? "0.7" : "1" }}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeModal}
            className="modal-close-button"
            aria-label="Close modal"
          />

          {children}

          <div
            style={{
              scale: isMobile && "1.12",
              gap: isMobile && "5px",
            }}
            className="modal-social"
          >
            <a
              href="https://t.me/TheDaddySammy"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <span className="social telegram"></span>
              {texts.telegram}
            </a>

            <a
              href="https://www.instagram.com/smashkarimov/"
              target="_blank"
              rel="noreferrer"
              className="social-button"
            >
              <span className="social instagram"></span>
              {texts.instagram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;

// import React, { useState, useCallback, useEffect } from "react";
// import "../styles/ModalWindow.css";

// function ModalWindow({ show, onClose, childen, texts }) {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleKeyDown = useCallback(
//     (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     },
//     [onClose],
//   );

//   useEffect(() => {
//     if (show) {
//       setIsVisible(true);
//       document.addEventListener("keydown", handleKeyDown);
//     } else {
//       const timer = setTimeout(() => setIsVisible(false), 800);
//       return () => clearTimeout(timer);
//     }
//   }, [show, handleKeyDown]);

//   useEffect(() => {
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [handleKeyDown]);

//   return (
//     <div
//       className={`modal-backdrop ${show ? "show" : ""}`}
//       style={{ display: isVisible }}
//       onClick={onClose}
//     >
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button
//           onClick={onClose}
//           className="modal-close-button"
//           aria-label="Close modal"
//         ></button>

//         {childen}

//         <div className="modal-social">
//           <a
//             href="https://t.me/Samy_Yusuf"
//             target="_blank"
//             rel="noreferrer"
//             className="social-button"
//           >
//             <span className="social telegram"></span>
//             {texts.telegram}
//           </a>

//           <a
//             href="https://www.instagram.com/smashkarimov/"
//             target="_blank"
//             rel="noreferrer"
//             className="social-button"
//           >
//             <span className="social instagram"></span>
//             {texts.instagram}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ModalWindow;
