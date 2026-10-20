import styles from "./Navigation.module.css";

import { useApp } from "@/context/AppContext";

const Navigation = ({ texts }) => {
  const { toBlock, upButton, isMobile } = useApp();

  return (
    <>
      <ul className={isMobile ? styles.navbarMobile : styles.navbar}>
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
            {texts.feedback}
          </a>
        </li>
        <li>
          <a onClick={() => toBlock(2800)} href="#guarantee">
            {texts.guarantee}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
