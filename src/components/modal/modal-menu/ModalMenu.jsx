import { useEffect, useCallback, useState } from "react";

import "./ModalMenu.css";
import LanguageSwitcher from "@/components/languages/LanguageSwitcher";

function ModalMenu({
  show,
  onClose,
  texts,
  language,
  setLanguage,
  upButton,
  toBlock,
}) {
  const [isMounted, setIsMounted] = useState(show);

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
      setIsMounted(true);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 50);

      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, handleKeyDown]);

  if (!isMounted) return null;

  const handleLinkClick = (callback) => {
    callback();
    onClose();
  };

  return (
    <div className={`menu-overlay ${show ? "show" : ""}`} onClick={onClose}>
      <aside
        className={`menu-panel ${show ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          className="menu-close"
          onClick={onClose}
          aria-label="close menu"
        /> */}

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
