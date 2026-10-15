import React from "react";

const HeaderButton = ({ ariaLabel, image, place, alter, onClick }) => {
  return (
    <>
      <div className={`fixed top-4 ${place} z-40`}>
        <div className="relative z-50">
          <button
            onClick={onClick}
            className="flex items-center justify-center p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-rose-50 transition-colors"
            aria-label={ariaLabel}
          >
            <img
              className="lucide lucide-globe w-5 h-5 text-rose-500"
              src={`/icons/${image}`}
              alt={alter}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderButton;
