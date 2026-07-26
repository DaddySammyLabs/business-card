import useAppState from "./useAppState";
import "./assets/styles/App.css";

import texts from "./constants/texts";

import ModalWindow from "./components/modal/ModalWindow";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/picture/Portfolio";

import ReviewCarusel from "./components/screens/reviews/ReviewCarusel";

import Guarantees from "./components/Guarantees";

function App() {
  const {
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
  } = useAppState();

  return (
    <>
      <div className="apps">
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
          <h2
            style={{
              marginBottom: isMobile && "10px",
            }}
            className="modal-title"
          >
            {" "}
            {texts[language].modalTitle}
          </h2>
          <p
            style={{
              fontSize: isMobile && "25px",
            }}
            className="modal-text"
          >
            {texts[language].modalText}
            <b>{texts[language].modalInstagram}</b>
          </p>
        </div>
      </ModalWindow>
    </>
  );
}

export default App;
