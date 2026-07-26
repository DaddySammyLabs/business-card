/* src/components/screens/reviews/ReviewCarusel.jsx */

import { useCallback, useEffect, useRef } from "react";
import styles from "./Reviews.module.css";

import Review from "../Review";

const ReviewCarusel = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const visibleReviews = 3;

  const reviews = [
    {
      id: 1,
      name: "Mattew M.",
      link: "https://t.me/TheDaddySammy",
      text: "What is love, Текст отзыва на русском.",
    },
    {
      id: 2,
      name: "Charlie R.",
      link: "https://t.me/TheDaddySammy",
      text: "Review text in English. What is love, Текст отзыва на русском.",
    },
    {
      id: 3,
      name: "Alexander M.",
      link: "https://t.me/TheDaddySammy",
      text: "Текст отзыва на русском. Review text in English.",
    },
  ];

  const getCardWidth = () => {
    if (!cardRef.current) return 0;

    return cardRef.current.offsetWidth;
  };

  const handleScroll = useCallback(() => {
    const container = containerRef.current;

    if (!container) return;

    const cardWidth = getCardWidth();
    const scrollWidth = cardWidth * visibleReviews;

    if (container.scrollLeft <= 0) {
      container.style.scrollBehavior = "auto";

      container.scrollLeft = container.scrollWidth - scrollWidth * 2;

      container.style.scrollBehavior = "smooth";
    }

    if (container.scrollLeft >= container.scrollWidth - scrollWidth) {
      container.style.scrollBehavior = "auto";

      container.scrollLeft = scrollWidth;

      container.style.scrollBehavior = "smooth";
    }
  }, []);

  const prevReview = () => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollLeft -= getCardWidth();
  };

  const nextReview = () => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollLeft += getCardWidth();
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const cardWidth = getCardWidth();

    container.scrollLeft = cardWidth * visibleReviews;

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const carouselReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className={styles.reviewBlock}>
      <h1>FEEDBACK</h1>

      <p className={styles.description}>
        Отзывы клиентов, написанные со своих
        <span className={styles.selecting}>личных аккаунтов</span>
        Телеграм. Всё прозрачно!
        <br />
        Любой отзыв можно
        <span className={styles.selecting}>открыть</span>в Телеграм и
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
