import { useEffect, useState } from "react";

import "./styles/App.css";

import { useAutoAnimate } from "@formkit/auto-animate/react";
// const [parent] = useAutoAnimate();
// ref={parent}

import texts from "./constants/texts";
import useLanguage from "./hooks/useLanguage";
import useTheme from "./hooks/useTheme";
import useModal from "./hooks/useModal";

import ModalWindow from "./components/modal/ModalWindow";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/picture/Portfolio";

import ReviewCarusel from "./components/reviews/ReviewCarusel";
import Guarantees from "./components/Guarantees";

function App() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isOpen, open, close } = useModal();

  const [parent] = useAutoAnimate();

  const [scroll, setScroll] = useState(0);
  const scrollUp = () => {
    setScroll(window.scrollX);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useState(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (heigh) => {
    window.scrollTo({ top: heigh, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // onClick={upButton}
  // onClick={(e) => toBlock(e.target.getAttribute("heigh"))}
  // heigh="700"

  return (
    <>
      <div ref={parent} className="apps">
        <Header
          texts={texts[language]}
          openModal={open}
          language={language}
          setLanguage={setLanguage}
          upButton={upButton}
          toBlock={toBlock}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="container">
          <Hero texts={texts[language]} />
        </div>
        <Services theme={theme} texts={texts[language]} openModal={open} />
        <Portfolio texts={texts[language]} />
        <div className="container">
          <ReviewCarusel texts={texts[language]} language={language} />

          <Guarantees
            upButton={upButton}
            scroll={scroll}
            texts={texts[language]}
            language={language}
            theme={theme}
          />
        </div>
      </div>
      {/* <ModalWindow theme={theme} show={isOpen} onClose={close} texts={texts}> */}
      <ModalWindow
        theme={theme}
        show={isOpen}
        onClose={close}
        texts={texts[language]}
      >
        <div className="modal-window">
          <h2 className="modal-title"> {texts[language].modalTitle}</h2>
          <p className="modal-text">
            {texts[language].modalText}
            <b>{texts[language].modalInstagram}</b>
          </p>
        </div>
      </ModalWindow>
    </>
  );
}

export default App;
