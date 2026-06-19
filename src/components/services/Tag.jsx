/* src/components/services/Tag.jsx */

import "./Services.css";

function Tag({ tagTitle, checkIcon }) {
  return (
    <>
      <span className="tag">
        <span className="tag-icon">
          <img src={checkIcon} alt={checkIcon} />
        </span>
        {tagTitle}
      </span>
    </>
  );
}

export default Tag;
