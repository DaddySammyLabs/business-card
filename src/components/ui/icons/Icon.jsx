/* src/components/icons/Icon.jsx */

import styles from "./Icon.module.css";

function IconImg({ title, link, image }) {
  return (
    <>
      <a
        // className={`icon-link ${theme === "light" ? "icon-dark" : "icon-light"}`}
        className={styles.icon}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={`/icons/${image}`} alt={title} />
      </a>
    </>
  );
}

export default IconImg;
