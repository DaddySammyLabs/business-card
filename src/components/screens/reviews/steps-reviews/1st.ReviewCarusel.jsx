import React from "react";
import { useEffect, useRef } from "react";
import styles from "./Reviews.module.css";

import Review from "./Review";

const ReviewCarusel = () => {
  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);
  const visibleReviews = 3;

  const reviews = [
    <Review
      key={1}
      name={"Mattew M."}
      link={"https://t.me/TheDaddySammy"}
      text={"What is love, Текст отзыва на русском."}
    />,
    <Review
      key={2}
      name={"Charlie R."}
      link={"https://t.me/TheDaddySammy"}
      text={"Review text in English. What is love, Текст отзыва на русском."}
    />,
    <Review
      key={3}
      name={"Alexander M."}
      link={"https://t.me/TheDaddySammy"}
      text={"Текст отзыва на русском. Review text in English."}
    />,
  ];

  // const width = reviewWidthRef.current * visibleReviews;
  // box.scrollLeft = (box.scrollWidth - width) / 2;

  const handleScroll = () => {
    // const box = containerRef.current;
    const box = containerRef.current;
    if (!box) return;

    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = box.scrollWidth - 2 * width;
      box.style.scrollBehavior = "smooth";
    }

    if (box.scrollLeft >= box.scrollWidth - width) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = width;
      box.style.scrollBehavior = "smooth";
    }
  };

  const btnPrevReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;

    // const box = containerRef.current;
    // if (!box) return;
    // box.scrollLeft -= reviewWidthRef.current;
  };

  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;

    // const box = containerRef.current;
    // if (!box) return;
    // box.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
    // const box = containerRef.current;
    const box = containerRef.current;
    if (!box) return;

    // const firstReview = box.querySelector(`.${styles.card}`); //(".reviewCard")
    // reviewWidthRef.current = firstReview.clientWidth;
    const firstReview = box.querySelector(`.${styles.card}`);
    if (!firstReview) return;

    // box.scrollLeft = (box.scrollWidth - width) / 2;
    // box.addEventListener("scroll", handleScroll);
    reviewWidthRef.current = firstReview.clientWidth;

    const width = reviewWidthRef.current * visibleReviews;
    box.scrollLeft = (box.scrollWidth - width) / 2;

    box.addEventListener("scroll", handleScroll);

    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.reviewBlock}>
        <h1>{"FEEDBACK"}</h1>

        <p className={styles.description}>
          Отзывы клиентов, написанные со своих
          <span className={styles.selecting}>личных аккаунтов </span>
          Телеграм. Всё прозрачно! <br />
          Любой отзыв можно
          <span className={styles.selecting}>открыть</span>в Телеграм и{" "}
          <span className={styles.selecting}>спросить</span> об впечетлениях
          работы со мной <br />у автора отзыва лично.
        </p>

        <div className={styles.carusel}>
          <div className={styles.container} ref={containerRef}>
            {reviews.slice(-visibleReviews)}
            {reviews}
            {reviews.slice(0, visibleReviews)}
          </div>
        </div>

        <div className={styles.buttons}>
          <span
            onClick={btnPrevReview}
            className={`${styles.prew} ${styles.next}`}
          >
            <img src="/icons/arrow_left.svg" alt="Previous" />
          </span>
          <span onClick={btnNextReview} className={styles.next}>
            <img src="/icons/arrow_right.svg" alt="Next" />
          </span>
        </div>

        {/* <div className={styles.сarusel}>
          <div className={styles.сontainer}>
            {visibleReviews.map((review) => (
              <Review
                key={review.id}
                name={review.name}
                link={review.link}
                text={review.text}
              />
            ))}
          </div>
        </div> */}

        {/* {reviews.length > 1 && (
          <div className={styles.buttons}>
            <span onClick={prev} className={styles.prew}>
              <img src="/icons/arrow_left.svg" alt="Previous" />
            </span>
            <span onClick={next} className={styles.next}>
              <img src="/icons/arrow_right.svg" alt="Next" />
            </span>
          </div>
        )} */}
      </div>
    </>
  );
};

export default ReviewCarusel;
