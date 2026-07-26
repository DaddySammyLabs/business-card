import { useCallback, useEffect, useRef } from "react";

const useCarousel = (reviews, visibleReviews = 3) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const getCardWidth = useCallback(() => {
    if (!cardRef.current) return 0;
    return cardRef.current.offsetWidth;
  }, []);

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
  }, [getCardWidth, visibleReviews]);

  const prevReview = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft -= getCardWidth();
  }, [getCardWidth]);

  const nextReview = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft += getCardWidth();
  }, [getCardWidth]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();
    container.scrollLeft = cardWidth * visibleReviews;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll, getCardWidth, visibleReviews]);

  // Дублируем отзывы для бесконечного скролла
  const carouselReviews = [...reviews, ...reviews, ...reviews];

  return {
    containerRef,
    cardRef,
    carouselReviews,
    prevReview,
    nextReview,
  };
};

export default useCarousel;
