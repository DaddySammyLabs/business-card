import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "../styles/Reviews.css";
import Review from "./Review";
import useReviewsCarousel from "../hooks/useReviewsCarousel";

function ReviewCarusel({ language = "ru" }) {
  const [parent] = useAutoAnimate();
  const { reviewsData, visibleReviews, loading, next, prev } =
    useReviewsCarousel(3);

  if (loading) {
    return (
      <div className="review-block">
        <h1>{language === "ru" ? "ОТЗЫВЫ" : "FEEDBACK"}</h1>
        <p>{language === "ru" ? "Загрузка..." : "Loading..."}</p>
      </div>
    );
  }

  return (
    <div ref={parent} className="review-block">
      <h1>{language === "ru" ? "ОТЗЫВЫ" : "FEEDBACK"}</h1>

      <p className="description">
        Отзывы клиентов, написанные со своих
        <span className="selecting">личных аккаунтов </span>
        Телеграм. Всё прозрачно! <br />
        Любой отзыв можно
        <span className="selecting">открыть</span>в Телеграм и{" "}
        <span className="selecting">спросить</span> об впечетлениях работы со
        мной <br />у автора отзыва лично.
      </p>

      <div className="review-carusel">
        <div className="review-container">
          {visibleReviews.map((review) => (
            <Review
              key={review.id}
              name={review.name?.[language] || review.name?.ru}
              link={review.link}
              text={review.text?.[language] || review.text?.ru}
            />
          ))}
        </div>
      </div>

      {reviewsData.length > 1 && (
        <div className="buttons-carusel">
          <span onClick={prev} className="next-button button-prew">
            <img src="/icons/arrow_left.svg" alt="Previous" />
            {/* <img src="/icons/angle-right.svg" alt="Previous" /> */}
          </span>
          <span onClick={next} className="next-button">
            <img src="/icons/arrow_right.svg" alt="Next" />
            {/* <img src="/icons/angle-right.svg" alt="Next" /> */}
          </span>
        </div>
      )}
    </div>
  );
}

export default ReviewCarusel;
