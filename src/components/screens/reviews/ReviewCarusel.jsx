/* src/components/screens/reviews/ReviewCarusel.jsx */
import { useApp } from "@/context/AppContext";

import useCarousel from "./useReviews";
import { reviews } from "./reviews.data";
import styles from "./Reviews.module.css";
import Review from "./Review";

import useResize from "@/hooks/useResize";

const ReviewCarusel = ({ texts }) => {
  const { language = "ru" } = useApp();

  const isMobile = useResize();

  const { containerRef, cardRef, carouselReviews, prevReview, nextReview } =
    useCarousel(reviews, 3);

  return (
    <section className={styles.reviewBlock}>
      <h1>{texts.feedback.toUpperCase()}</h1>

      <p className={styles.description}>
        Отзывы клиентов, написанные со своих
        <span className={styles.selecting}>личных аккаунтов</span>
        Телеграм. Всё прозрачно!
        <br />
        Любой отзыв можно
        <span className={styles.selecting}>открыть</span> в Телеграм и
        <span className={styles.selecting}>спросить</span>
        об впечатлениях работы со мной
        <br />у автора отзыва лично.
      </p>

      <div className={styles.carusel}>
        <div className={styles.container} ref={containerRef}>
          {carouselReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              ref={index === 0 ? cardRef : null}
            >
              <Review
                name={review.name}
                link={review.link}
                text={review.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <span onClick={prevReview} className={`${styles.prew} ${styles.next}`}>
          <img src="/icons/arrow_left.svg" alt="Previous" />
        </span>

        <span onClick={nextReview} className={styles.next}>
          <img src="/icons/arrow_right.svg" alt="Next" />
        </span>
      </div>
    </section>
  );
};

export default ReviewCarusel;
