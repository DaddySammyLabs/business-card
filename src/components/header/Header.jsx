// import { useEffect, useState } from "react";

import useResize from "@/hooks/Resize";

import Icon from "../icons/Icon";
import SwitcherTheme from "../theme/SwitcherTheme";
import LanguageSwitcher from "../languages/LanguageSwitcher";

import HeaderMobile from "./header-mobile/HeaderMobile";

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
  const isMobile = useResize();
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <header className="header">
        {!isMobile ? (
          <div className="header-inner">
            <nav className="navbar">
              <ul className="navbar-list">
                <li>
                  <a onClick={upButton} href="#about">
                    {texts.about}
                  </a>
                </li>
                <li>
                  <a onClick={() => toBlock(600)} href="#service">
                    {texts.service}
                  </a>
                </li>
                <li>
                  <a onClick={() => toBlock(1200)} href="#portfolio">
                    {texts.portfolio}
                  </a>
                </li>
                <li>
                  <a onClick={() => toBlock(1900)} href="#feed_back">
                    {texts.feed_back}
                  </a>
                </li>
                <li>
                  <a onClick={() => toBlock(2800)} href="#guarantee">
                    {texts.guarantee}
                  </a>
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
                link={"https://t.me/TheDaddySammy"}
              />

              <SwitcherTheme theme={theme} toggleTheme={toggleTheme} />
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        ) : (
          <HeaderMobile
            texts={texts}
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
