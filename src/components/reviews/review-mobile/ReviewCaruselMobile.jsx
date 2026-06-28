// ReviewCarusel-one-review.jsx

import useReviewsCarousel from "@/hooks/useReviewsCarousel";

import "./ReviewSmoothCarusel.css";
import Review from "../Review";

function MobileReviews({ texts, language = "ru" }) {
  const { reviewsData, index, loading, next, prev } = useReviewsCarousel();

  if (loading) {
    return (
      <div className="review-block">
        <h1>{language === "ru" ? "ОТЗЫВЫ" : "FEEDBACK"}</h1>
        <p>Загрузка...</p>
      </div>
    );
  }

  const total = reviewsData.length;

  // бесконечный safe index
  const safeIndex = ((index % total) + total) % total;

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
        <div
          className="review-track"
          style={{
            transform: `translateX(-${safeIndex * 100}%)`,
          }}
        >
          {reviewsData.map((review) => (
            <div className="review-slide" key={review.id}>
              <Review
                name={review.name?.[language] || review.name?.ru}
                link={review.link}
                text={review.text?.[language] || review.text?.ru}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="buttons-carusel">
        <span onClick={prev} className="next-button button-prew">
          <img src="/icons/arrow_left.svg" alt="prev" />
        </span>

        <span onClick={next} className="next-button">
          <img src="/icons/arrow_right.svg" alt="next" />
        </span>
      </div>
    </div>
  );
}

export default MobileReviews;
