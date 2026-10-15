import styles from "./Header.module.css";
import { useApp } from "@/context/AppContext";

import HeaderMobile from "./header-mobile/HeaderMobile";

import Icon from "@/components/ui/icons/Icon";
import HeaderNavigation from "../../ui/navigation/Navigation";
import SwitcherTheme from "@/components/ui/theme/SwitcherTheme";
import ModalMenu from "@/components/ui/modal/modal-menu/ModalMenu";
import NavbarButton from "@/components/ui/buttons/navbar-button/NavbarButton";

function Header({ texts }) {
  const { openModal, theme, isMobile } = useApp();

  return (
    <>
      <header className={styles.header}>
        {!isMobile ? (
          <div className={styles.headerInner}>
            <HeaderNavigation texts={texts} />

            <div className={styles.socials}>
              <button
                onClick={openModal}
                className={styles.contact}
                type="button"
              >
                {texts.contact}
              </button>
              <Icon
                title={texts.instagram}
                image={
                  theme === "light" ? "dark_instagram.svg" : "instagram.svg"
                }
                link={"https://www.instagram.com/smashkarimov/"}
              />
              <Icon
                image={theme === "light" ? "dark_telegram.svg" : "telegram.svg"}
                title={texts.telegram}
                link={"https://t.me/TheDaddySammy"}
              />

              <SwitcherTheme />
              <NavbarButton />

              <ModalMenu texts={texts} />
            </div>
          </div>
        ) : (
          <HeaderMobile texts={texts} />
        )}
      </header>
    </>
  );
}

export default Header;
