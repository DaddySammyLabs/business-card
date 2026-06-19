// src/components/pictures/carusel/AllGallery.jsx

import React from "react";
// import CaruselAll from "./CaruselAll";
import CaruselCorrect from "./CaruselCorrect";

const AllGallery = () => {
  return (
    <div className="carousel-wrapper">
      <CaruselCorrect direction="left" />
      <CaruselCorrect direction="right" />
    </div>
  );
  // <CaruselAll direction="left" />;
  // <CaruselAll direction="right" />;
};

export default AllGallery;
