import React, { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import "../styles/Reviews.css";
import Review from "./Review";

function ReviewCarusel({ language = "ru" }) {
  const [parent] = useAutoAnimate();

  const [reviewsData, setReviewsData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const visible = 3;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Берём статический JSON из public
        const response = await fetch("/reviews.json");
        if (!response.ok) throw new Error("Ошибка загрузки отзывов");

        const data = await response.json();

        // Важно: JSON содержит объект { reviews: [...] }
        setReviewsData(data.reviews);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const next = () => {
    if (!reviewsData.length) return;
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prev = () => {
    if (!reviewsData.length) return;
    setIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  // const getVisibleReviews = () => {
  //   if (!reviewsData.length) return [];
  //   return Array.from(
  //     { length: Math.min(visible, reviewsData.length) },
  //     (_, i) => reviewsData[(index + i) % reviewsData.length],
  //   );
  // };
  const visibleReviews = React.useMemo(() => {
    if (!reviewsData.length) return [];
    return Array.from(
      { length: Math.min(visible, reviewsData.length) },
      (_, i) => reviewsData[(index + i) % reviewsData.length],
    );
  }, [reviewsData, index]);

  if (loading) {
    return (
      <div className="review-block">
        <h1>{language === "ru" ? "ОТЗЫВЫ" : "FEEDBACK"}</h1>
        <p>Загрузка...</p>
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

      {/* <div className="review-carusel">
        <div className="review-container">
          {getVisibleReviews().map((review) => (
            <Review
              key={review.id}
              name={review.name?.[language] || review.name?.ru}
              link={review.link}
              text={review.text?.[language] || review.text?.ru}
            />
          ))}
        </div>
      </div> */}
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

      {reviewsData.length > 1 && (
        <div className="buttons-carusel">
          <span onClick={prev} className="next-button button-prew">
            <img src="/icons/arrow_left.svg" alt="Previous" />
          </span>
          <span onClick={next} className="next-button">
            <img src="/icons/arrow_right.svg" alt="Next" />
          </span>
        </div>
      )}
    </div>
  );
}

export default ReviewCarusel;
