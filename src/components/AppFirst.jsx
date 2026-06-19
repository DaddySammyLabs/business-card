// AppFirst.jsx
// just notes, for saving - origin info from tutorial

import "./styles/App.css";
import "./styles/Reviews.css";
import arrow_right from "/public/icons/arrow_right.svg";
import arrow_left from "/public/icons/arrow_left.svg";

import texts from "./constants/texts";
import useLanguage from "./hooks/useLanguage";

import LanguageSwitcher from "./components/languages/LanguageSwitcher";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/picture/Portfolio";
import Review from "./components/Review";

import React, { useState, useRef, useEffect } from "react";

function App() {
  const { language, setLanguage } = useLanguage();

  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const reviews = [
    <Review
      key={1}
      name="Владислав М."
      link="https://t.me/Samy_Yusuf"
      text="What is love, Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока."
    />,
    <Review
      key={2}
      name="Никита Ч."
      link="https://t.me/Samy_Yusuf"
      text="Отзыва от Никитыч , оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока."
    />,
    <Review
      key={3}
      name="Антон Т."
      link="https://t.me/Samy_Yusuf"
      text=" Антон Т - Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока."
    />,
    <Review
      key={4}
      name="Алексей П."
      link="https://t.me/Samy_Yusuf"
      text="Текс отзыва, оставленного клиентом в Телеграм канале, который можно открыть нажав на кнопку в правом верхнем углу этого блока."
    />,
  ];

  const visibleReviews = 3;

  const handleScroll = () => {
    const box = containerRef.current;
    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = box.scrollWidth - 2 * width;
      box.style.scrollBehavior = "smooth";
    }

    if (box.scrollLeft <= box.scrollWidth - width) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = width;
      box.style.scrollBehavior = "smooth";
    }
  };
  //   const handleScroll = () => {
  //     const box = containerRef.current;

  //     const maxScroll = box.scrollWidth - box.clientWidth;

  //     // 👉 дошли до конца
  //     if (box.scrollLeft >= maxScroll) {
  //       box.scrollLeft = 0;
  //     }

  //     // 👉 дошли до начала (если идёшь назад)
  //     if (box.scrollLeft <= 0) {
  //       box.scrollLeft = maxScroll;
  //     }
  //   };

  const btnPrewReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;
  };
  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;
  };
  //   const btnNextReview = () => {
  //     const box = containerRef.current;

  //     box.scrollBy({
  //       left: 420,
  //       behavior: "smooth",
  //     });
  //   };

  //   const btnPrewReview = () => {
  //     const box = containerRef.current;

  //     box.scrollBy({
  //       left: -420,
  //       behavior: "smooth",
  //     });
  //   };

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector(".review-card");
    reviewWidthRef.current = firstReview.clientWidth;

    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener("scroll", handleScroll);

    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   useEffect(() => {
  //     const box = containerRef.current;

  //     box.addEventListener("scroll", handleScroll);

  //     return () => {
  //       box.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <>
      <div className="app-top">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>

      <div className="container">
        <Header texts={texts[language]} />
        <Hero texts={texts[language]} />
        <Services texts={texts[language]} />
        <Portfolio texts={texts[language]} />
        {/* <Review texts={texts[language]} /> */}

        <div className="review-block">
          <h1>ОТЗЫВЫ</h1>
          <p className="description">
            Отзывы клиентов, написанные со своих
            <span className="selecting">личных аккаунтов </span>
            Телеграм. Всё прозрачно! <br />
            Любой отзыв можно
            <span className="selecting">открыть</span>в Телеграм и{" "}
            <span className="selecting">спросить</span> об впечетлениях работы
            со мной <br />у автора отзыва лично.
          </p>

          <div className="review-carusel">
            <div className="review-container" ref={containerRef}>
              {reviews.slice(-visibleReviews)}
              {reviews}
              {reviews.slice(0, visibleReviews)}
            </div>
          </div>

          <div className="buttons-carusel">
            <span className="next-button button-prew">
              {/* <span className="array-next-icon" onClick={btnPrewReview}></span> */}
              <img
                className="array-icon"
                onClick={btnPrewReview}
                src={arrow_left}
              ></img>
            </span>
            <span className="next-button">
              {/* <span className="array-next-icon" onClick={btnNextReview}></span> */}
              <img
                className="array-icon"
                onClick={btnNextReview}
                src={arrow_right}
              ></img>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
