import { useEffect, useState } from "react";

import Icon from "../icons/Icon";

import SwitcherTheme from "../theme/SwitcherTheme";

import LanguageSwitcher from "../languages/LanguageSwitcher";
import HeaderMobile from "./HeaderMobile";

import "./Header.css";

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
  // const [isPortrait, setIsPortrait] = useState(
  //   window.innerWidth > window.innerWidth,
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsPortrait(window.innerWidth > window.innerHeight);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        {isMobile ? (
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
              <button
                onClick={openModal}
                className="header-button"
                type="button"
              >
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
        ) : (
          <HeaderMobile
            texts={texts}
            openModal={openModal}
            theme={theme}
            toggleTheme={toggleTheme}
            language={language}
            setLanguage={setLanguage}
            upButton={upButton}
            toBlock={toBlock}
          />
        )}
      </header>
    </>
  );
}

export default Header;
