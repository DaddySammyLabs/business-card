/* src/components/screens/reviews/Review.jsx */
import styles from "./Reviews.module.css";

const Review = ({ name, link, text }) => {
  return (
    <>
      <div className={`reviewCard ${styles.card}`}>
        <div className={styles.content}>
          <div className={styles.inner}>
            <div className={styles.wrapper}>
              <h2>{name}</h2>
              <a className={styles.link} href={link} target="_blank">
                <img
                  className={styles.telegramIcon}
                  src="/icons/telegram.svg"
                  alt="telegram"
                />
                <img
                  className={styles.linkIcon}
                  src="/icons/link.svg"
                  alt="link"
                />
              </a>
            </div>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
