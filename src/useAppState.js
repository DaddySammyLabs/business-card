import { useEffect, useState } from "react";

// import { useAutoAnimate } from "@formkit/auto-animate/react";
// const [parent] = useAutoAnimate();
// ref={parent}

import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";
import useResize from "./hooks/Resize";

const useAppState = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, open, close } = useModal();
  const isMobile = useResize();

  const [scroll, setScroll] = useState(0);
  const scrollUp = () => {
    setScroll(window.scrollX);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //   const upButton = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };

  //   const upButton = useCallback(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }, []);

  useState(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };
  //   const toBlock = (top) => {
  //     window.scrollTo({
  //       top,
  //       behavior: "smooth",
  //     });
  //   };

  //   const toBlock = useCallback((top) => {
  //     window.scrollTo({
  //       top,
  //       behavior: "smooth",
  //     });
  //   }, []);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // onClick={upButton}
  // onClick={(e) => toBlock(e.target.getAttribute("heigh"))}
  // heigh="700"

  return {
    language,
    setLanguage,
    theme,
    toggleTheme,

    isOpen,
    open,
    close,
    isMobile,

    scroll,
    upButton,
    toBlock,
  };
};

export default useAppState;
