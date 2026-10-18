/* src/components/screens/services/Services.jsx */
import { useApp } from "@/context/AppContext";
import styles from "./Services.module.css";

import Tag from "./Tag";

function Services({ texts }) {
  const { openModal, theme } = useApp();
  return (
    <>
      <div className={styles.wrapper} draggable={false}>
        <div className={styles.services}>
          <div>
            <h1>{texts.service.toUpperCase()}</h1>
            <p>
              {texts.Ido}
              <span className="violet-text">{texts.service_info_part2}</span>
              {texts.service_info_part3}
            </p>
            <div className={styles.tagBlock}>
              <Tag
                texts={texts}
                tagTitle={texts.banners}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />

              <Tag
                texts={texts}
                tagTitle={texts.preview_youtube}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />
              <Tag
                texts={texts}
                tagTitle={texts.design_youtube}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />
              <Tag
                texts={texts}
                tagTitle={texts.infographics}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />
            </div>
            <div className={styles.tagBlock}>
              <Tag
                texts={texts}
                tagTitle={texts.design_instagram}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />
              <Tag
                texts={texts}
                tagTitle={texts.design_facebook}
                checkIcon={
                  theme === "light"
                    ? "/icons/check-violet.svg"
                    : "/icons/check-white.svg"
                }
              />
            </div>

            <p>
              {texts.service_text_part1}
              {/* <span onClick={open} className="violet-text"> */}
              <span onClick={openModal} className="violet-text">
                {texts.service_text_part2}
              </span>
              .
            </p>
          </div>
          {/* services-block */}
        </div>
      </div>
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

export default Services;
