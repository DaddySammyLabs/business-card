// import useAppState from "./useAppState";
import { useApp } from "./context/AppContext";
import styles from "./assets/styles/App.module.css";

import texts from "./constants/texts";
import ModalWindow from "./components/ui/modal/modal-window/ModalWindow";

import Header from "./components/screens/header/Header";

import Home from "./components/pages/Home";

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

        {/* <Home texts={texts[language]} /> */}

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

      <ModalWindow texts={texts[language]}>
        <div>
          <h2
            className={`${styles.modalTitle} ${isMobile ? styles.mobile_mb : ""}`}
          >
            {texts[language].modalTitle}
          </h2>
          <p
            className={`${styles.modalText} ${isMobile ? styles.mobile_textsize : ""}`}
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
