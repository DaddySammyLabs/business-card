// import useAppState from "./useAppState";
import { useApp } from "./context/AppContext";
import "./assets/styles/App.css";
import styles from "./assets/styles/App.module.css";

import texts from "./constants/texts";

import ModalWindow from "./components/ui/modal/ModalWindow";

import Header from "./components/screens/header/Header";
import Hero from "./components/screens/hero/Hero";
import Services from "./components/screens/services/Services";
import Portfolio from "./components/screens/portfolio/Portfolio";
import ReviewCarusel from "./components/screens/reviews/ReviewCarusel";
import Guarantees from "./components/screens/guarantee/Guarantees";

function App() {
  const { language, isMobile } = useApp();

  return (
    <>
      <div className="apps">
        <Header texts={texts[language]} />

        <div className="container">
          <Hero texts={texts[language]} />
        </div>

        <Services texts={texts[language]} />
        <Portfolio texts={texts[language]} />

        <div className="container">
          <ReviewCarusel texts={texts[language]} />

          <Guarantees texts={texts[language]} />
        </div>
      </div>
      {/* <ModalWindow theme={theme} show={isOpen} onClose={close} texts={texts}> */}
      <ModalWindow texts={texts[language]}>
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
