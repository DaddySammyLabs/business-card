import styles from "./ModalWindow.module.css";
import { useApp } from "@/context/AppContext";

function ModalWindow({ children, texts }) {
  const { isOpenModal, openModal, closeModal, theme, isMobile } = useApp();

  return (
    <div
      className={`${styles.backdrop} ${isOpenModal ? styles.show : ""}`}
      onClick={closeModal}
    >
      <div
        className={`${styles.content} ${isMobile ? styles.contentMobile : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className={styles.close}
          aria-label="Close modal"
        />

        {children}

        <div
          className={`${styles.socialBlock} ${isMobile ? styles.mobileSocial : ""}`}
        >
          <a
            href="https://t.me/TheDaddySammy"
            target="_blank"
            rel="noreferrer"
            className={styles.socialButton}
          >
            <span className={styles.telegram}></span>
            {texts.telegram}
          </a>

          <a
            href="https://www.instagram.com/smashkarimov/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialButton}
          >
            <span className={styles.instagram}></span>
            {texts.instagram}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
