/* src/components/icons/Icon.jsx */

import "./Icon.css";

function IconImg({ title, link, image }) {
  return (
    <>
      <a
        // className={`icon-link ${theme === "light" ? "icon-dark" : "icon-light"}`}
        className="icon-link icon-link-mobile"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt={title} />
      </a>
    </>
  );
}

export default IconImg;
