import { useEffect, useState } from "react";

// import useModal from "../hooks/useModal";
// import ModalWindow from "./modal/ModalWindow";
// const { isOpen, open, close } = useModal();

import Icon from "./icons/Icon";

import SwitcherTheme from "../components/theme/SwitcherTheme";

import LanguageSwitcher from "./languages/LanguageSwitcher";

import "../styles/Header.css";

// function Header({ texts }) {
function Header({
  texts,
  openModal,
  theme,
  toggleTheme,
  language,
  setLanguage,
  upButton,
  toBlock,
}) {
  // const { isOpen, open, close } = useModal();

  //   const [isPortrait, setIsPortrait] = useState(
  //     window.innerWidth > window.innerWidth,
  //   );

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsPortrait(window.innerWidth > window.innerHeight);
  //     };
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  return (
    <>
      <div className="header-inner">
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a onClick={upButton}>{texts.about}</a>
            </li>
            <li>
              <a onClick={() => toBlock(600)}>{texts.service}</a>
            </li>
            <li>
              <a onClick={() => toBlock(1200)}>{texts.portfolio}</a>
            </li>
            <li>
              <a onClick={() => toBlock(1900)}>{texts.feed_back}</a>
            </li>
            <li>
              <a onClick={() => toBlock(2800)}>{texts.guarantee}</a>
            </li>
          </ul>
        </nav>

        <div className="socials-header">
          <button onClick={openModal} className="header-button" type="button">
            {texts.contact}
          </button>
          <Icon
            title={texts.instagram}
            image={
              theme === "light"
                ? "/icons/dark_instagram.svg"
                : "/icons/instagram.svg"
            }
            link={"https://www.instagram.com/smashkarimov/"}
          />
          <Icon
            image={
              theme === "light"
                ? "/icons/dark_telegram.svg"
                : "/icons/telegram.svg"
            }
            title={texts.telegram}
            link={"https://t.me/Samy_Yusuf"}
          />

          <SwitcherTheme theme={theme} toggleTheme={toggleTheme} />
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
      <header className="header">
        {/* {isPortrait ? ()} */}

        <div className="header-inner">
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a onClick={upButton}>{texts.about}</a>
              </li>
              <li>
                <a onClick={() => toBlock(600)}>{texts.service}</a>
              </li>
              <li>
                <a onClick={() => toBlock(1200)}>{texts.portfolio}</a>
              </li>
              <li>
                <a onClick={() => toBlock(1900)}>{texts.feed_back}</a>
              </li>
              <li>
                <a onClick={() => toBlock(2800)}>{texts.guarantee}</a>
              </li>
            </ul>
          </nav>

          <div className="socials-header">
            <button onClick={openModal} className="header-button" type="button">
              {texts.contact}
            </button>
            <Icon
              title={texts.instagram}
              // image={"/icons/dark_instagram.svg"}
              image={
                theme === "light"
                  ? "/icons/dark_instagram.svg"
                  : "/icons/instagram.svg"
              }
              link={"https://www.instagram.com/smashkarimov/"}
            />
            <Icon
              image={
                theme === "light"
                  ? "/icons/dark_telegram.svg"
                  : "/icons/telegram.svg"
              }
              title={texts.telegram}
              link={"https://t.me/Samy_Yusuf"}
            />

            <SwitcherTheme theme={theme} toggleTheme={toggleTheme} />
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </header>

      {/* <ModalWindow show={showModal} onClose={handleCloseModal} texts={texts}> */}
      {/* <ModalWindow show={isOpen} onClose={close} texts={texts}>
        <div className="modal-window">
          <h2 className="modal-title">{texts.modalTitle}</h2>
          <p className="modal-text">
            {texts.modalText}
            <b>{texts.modalInstagram}</b>
          </p>
        </div>
      </ModalWindow> */}
    </>
  );
}

export default Header;
