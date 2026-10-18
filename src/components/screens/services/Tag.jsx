/* src/components/screens/services/Tag.jsx */

import styles from "./Services.module.css";

function Tag({ tagTitle, checkIcon }) {
  return (
    <>
      <span className={styles.tag}>
        <span className="tag-icon">
          <img src={checkIcon} alt={checkIcon} />
        </span>
        {tagTitle}
      </span>
    </>
  );
}

export default Tag;
