/* src/components/modal/ModalMenu.jsx */

import { useState, useEffect, useCallback } from "react";

import "./ModalMenu.css";

import LanguageSwitcher from "../languages/LanguageSwitcher";

function ModalMenu({
  show,
  onClose,
  texts,
  language,
  setLanguage,
  upButton,
  toBlock,
}) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, handleKeyDown]);

  if (!show) return null;

  const handleLinkClick = (callback) => {
    callback();
    onClose();
  };

  return (
    <div className="menu-overlay" onClick={onClose}>
      <aside className="menu-panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="menu-close"
          onClick={onClose}
          aria-label="close menu"
        />

        <div className="menu-language">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        <ul className="menu-list">
          <li>
            <a href="#about" onClick={() => handleLinkClick(upButton)}>
              {texts.about}
            </a>
          </li>

          <li>
            <a
              href="#service"
              onClick={() => handleLinkClick(() => toBlock(600))}
            >
              {texts.service}
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              onClick={() => handleLinkClick(() => toBlock(1200))}
            >
              {texts.portfolio}
            </a>
          </li>

          <li>
            <a
              href="#feed_back"
              onClick={() => handleLinkClick(() => toBlock(1900))}
            >
              {texts.feed_back}
            </a>
          </li>

          <li>
            <a
              href="#guarantee"
              onClick={() => handleLinkClick(() => toBlock(2800))}
            >
              {texts.guarantee}
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default ModalMenu;

// import React, { useState, useCallback, useEffect } from "react";

// import "./ModalMenu.css";

// function ModalMenu({ show, onClose, children, texts, upButton, toBlock }) {
//   const [isVisible, setIsVisible] = useState(show);

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
//       const timer = setTimeout(() => {
//         setIsVisible(false);
//       }, 500);

//       return () => clearTimeout(timer);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [show, handleKeyDown]);

//   if (!isVisible) return null;

//   return (
//     <div className={`modal-backdrop ${show ? "show" : ""}`} onClick={onClose}>
//       <div
//         className="modal-content-mobile"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="modal-close-button"
//           aria-label="Close modal"
//         />

//         {children}

//         <ul className="navbar-list-mobile">
//           <li>
//             <a onClick={upButton} href="#about">
//               {texts.about}
//             </a>
//           </li>
//           <li>
//             <a onClick={() => toBlock(400)} href="#service">
//               {texts.service}
//             </a>
//           </li>
//           <li>
//             <a onClick={() => toBlock(900)} href="#portfolio">
//               {texts.portfolio}
//             </a>
//           </li>
//           <li>
//             <a onClick={() => toBlock(1200)} href="#feed_back">
//               {texts.feed_back}
//             </a>
//           </li>
//           <li>
//             <a onClick={() => toBlock(1800)} href="#guarantee">
//               {texts.guarantee}
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ModalMenu;
