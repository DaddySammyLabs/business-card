import { useEffect, useCallback, useState } from "react";
import { useApp } from "@/context/AppContext";

import styles from "./ModalMenu.module.css";

// import LanguageSwitcher from "@/providers/languages/LanguageSwitcher";
import LanguageSwitcher from "@/providers/langs/lang-uzb/LangSwitcher";

function ModalMenu({ children }) {
  const {
    language,
    setLanguage,
    isMobile,
    isOpenNavbar,
    openNavbar,
    closeNavbar,
  } = useApp();

  const [isMounted, setIsMounted] = useState(isOpenNavbar);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeNavbar();
      }
    },
    [closeNavbar],
  );

  useEffect(() => {
    if (isOpenNavbar) {
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
  }, [isOpenNavbar, handleKeyDown]);

  if (!isMounted) return null;

  const handleLinkClick = (callback) => {
    callback();
    closeNavbar();
  };

  return (
    <div
      className={`${styles.overlay} ${isOpenNavbar ? "show" : ""}`}
      onClick={closeNavbar}
    >
      <aside
        className={`${styles.panel} ${!isMobile ? styles.panelVertical : ""}  ${isOpenNavbar ? styles.open : styles.close}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`${styles.languages} ${!isMobile ? styles.langVertical : ""}`}
        >
          <LanguageSwitcher />
        </div>

        <div>{children}</div>
      </aside>
    </div>
  );
}

export default ModalMenu;
