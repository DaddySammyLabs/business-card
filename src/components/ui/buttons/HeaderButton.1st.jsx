import React from "react";

const HeaderButton = ({ ariaLabel, image, place, alter, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative z-50 flex items-center justify-center p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-rose-50 transition-colors ${place}`}
    >
      <img
        className="w-5 h-5 text-rose-500"
        src={`/icons/${image}`}
        alt={alter}
      />
    </button>
  );
};

export default HeaderButton;
