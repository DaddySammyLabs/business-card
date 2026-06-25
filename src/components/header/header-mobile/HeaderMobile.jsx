import useModal from "../../../hooks/useModal";

import Icon from "../../icons/Icon";
import SwitcherTheme from "../../theme/SwitcherTheme";
import ModalMenu from "../../modal/ModalMenu";

import "./HeaderMobile.css";

function HeaderMobile({
  texts,
  theme,
  toggleTheme,
  language,
  setLanguage,
  upButton,
  toBlock,
}) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <nav className="header-mobile">
        <SwitcherTheme theme={theme} toggleTheme={toggleTheme} />

        <Icon
          title={texts.instagram}
          image={
            theme === "light"
              ? "/icons/dark_instagram.svg"
              : "/icons/instagram.svg"
          }
          link="https://www.instagram.com/smashkarimov/"
        />

        <Icon
          title={texts.telegram}
          image={
            theme === "light"
              ? "/icons/dark_telegram.svg"
              : "/icons/telegram.svg"
          }
          link="https://t.me/Samy_Yusuf"
        />

        <span type="button" className="menu-header" onClick={open}>
          <img
            src={theme === "light" ? "/icons/bars_dark.svg" : "/icons/bars.svg"}
            alt="menu-navbar"
          />
        </span>
      </nav>
      <ModalMenu
        show={isOpen}
        onClose={close}
        texts={texts}
        language={language}
        setLanguage={setLanguage}
        upButton={upButton}
        toBlock={toBlock}
      />
    </>
  );
}

export default HeaderMobile;
