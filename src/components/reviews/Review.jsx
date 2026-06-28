/* src/components/Review.jsx */

import "./Reviews.css";
// { texts }
const Review = ({ name, link, text }) => {
  return (
    <>
      <div className="review-card">
        <div className="review-content">
          <div className="review-content-inner">
            <div className="content-inner-wrapper">
              <h2>{name}</h2>
              <a className="link" href={link} target="_blank">
                <img
                  className="telegram-icon"
                  src="/icons/telegram.svg"
                  alt="telegram"
                />
                <img className="link-icon" src="/icons/link.svg" alt="link" />
              </a>
            </div>
            <p className="review">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
