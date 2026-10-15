import styles from "./HeaderMobile.module.css";
import { useApp } from "@/context/AppContext";

import Icon from "@/components/ui/icons/Icon";
import SwitcherTheme from "@/components/ui/theme/SwitcherTheme";
import ModalMenu from "@/components/ui/modal/modal-menu/ModalMenu";
import HeaderNavigate from "@/components/ui/navigation/Navigation";
import NavbarButton from "@/components/ui/buttons/navbar-button/NavbarButton";

function HeaderMobile({ texts }) {
  const { theme } = useApp();

  return (
    <>
      <nav className={styles.headerMobile}>
        <SwitcherTheme />

        <Icon
          title={texts.instagram}
          image={theme === "light" ? "dark_instagram.svg" : "instagram.svg"}
          link={"https://www.instagram.com/smashkarimov/"}
        />
        <Icon
          image={theme === "light" ? "dark_telegram.svg" : "telegram.svg"}
          title={texts.telegram}
          link={"https://t.me/TheDaddySammy"}
        />
        <NavbarButton />
      </nav>
      <ModalMenu texts={texts}>
        <HeaderNavigate texts={texts} />
      </ModalMenu>
    </>
  );
}

export default HeaderMobile;
