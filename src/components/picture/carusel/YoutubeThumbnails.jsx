// src/components/pictures/carusel/YoutubeThumbnails.jsx

import React from "react";

const YoutubeThumbnails = ({ texts }) => {
  return (
    <div>
      <p
        style={{ fontSize: "28px", textAlign: "center", margin: "220px" }}
        className=" gallery-title"
      >
        {texts.category_empty}
      </p>
    </div>
  );
};

export default YoutubeThumbnails;
