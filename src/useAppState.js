import { useEffect, useState } from "react";

import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";
import useResize from "./hooks/Resize";
import useScroll from "./hooks/useScroll";

const useAppState = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, open, close } = useModal(false, true);

  const {
    isOpen: isOpenModal,
    open: openModal,
    close: closeModal,
  } = useModal(false, true);

  const {
    isOpen: isOpenNavbar,
    open: openNavbar,
    close: closeNavbar,
  } = useModal(false, true);

  const { scroll, upButton, toBlock } = useScroll();
  const isMobile = useResize();

  return {
    language,
    setLanguage,
    theme,
    toggleTheme,

    isOpen,
    open,
    close,

    isOpenModal,
    openModal,
    closeModal,

    isOpenNavbar,
    openNavbar,
    closeNavbar,

    isMobile,

    scroll,
    upButton,
    toBlock,
  };
};

export default useAppState;
