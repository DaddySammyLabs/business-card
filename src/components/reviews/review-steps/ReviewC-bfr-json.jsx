// Review.jsx before database: reviews.json

import React, { useState } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";
// const [parent] = useAutoAnimate();
// ref={parent}

import ".././styles/Reviews.css";

import Review from "./Review";

function ReviewCarusel({ texts }) {
  const [parent] = useAutoAnimate();

  const reviewsData = [
    {
      id: 1,
      name: "Владислав М.",
      link: "https://t.me/Samy_Yusuf",
      text: "What is love, Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока.",
    },
    {
      id: 2,
      name: "Никита Ч.",
      link: "https://t.me/Samy_Yusuf",
      text: "Отзыва от Никитыч , оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока.",
    },
    {
      id: 3,
      name: "Антон Т.",
      link: "https://t.me/Samy_Yusuf",
      text: " Антон Т - Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока.",
    },
    {
      id: 4,
      name: "Алексей П.",
      link: "https://t.me/Samy_Yusuf",
      text: "Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока.",
    },
  ];

  const visible = 3;
  const [index, setIndex] = useState(0);

  // 🔥 ВПЕРЁД (бесконечно)
  const next = () => {
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  // 🔥 НАЗАД (бесконечно)
  const prev = () => {
    setIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  // 🔥 получаем 3 видимых элемента
  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < visible; i++) {
      result.push(reviewsData[(index + i) % reviewsData.length]);
    }
    return result;
  };

  return (
    <div ref={parent} className="review-block">
      <h1>ОТЗЫВЫ</h1>
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
          {getVisibleReviews().map((r) => (
            <Review key={r.id} name={r.name} link={r.link} text={r.text} />
          ))}
        </div>
      </div>

      <div className="buttons-carusel">
        <span onClick={prev} className="next-button button-prew">
          <img src="/icons/arrow_left.svg" />
        </span>
        <span onClick={next} className="next-button">
          <img src="/icons/arrow_right.svg" />
        </span>
      </div>
    </div>
  );
}

export default ReviewCarusel;
