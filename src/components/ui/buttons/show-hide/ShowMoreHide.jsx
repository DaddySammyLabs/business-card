import React from "react";

// const [showAll, setShowAll] = useState(false);
// const visiblePhotos = showAll ? photos : photos.slice(0, 4);

const ShowMoreHide = ({ handleToggle, more, hide, showAll }) => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleToggle}
          className="px-6 py-3 bg-rose-500 text-white rounded-md shadow hover:bg-rose-600 transition-all duration-300 flex items-center gap-2"
          type="button"
        >
          {showAll ? hide : more}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-arrow-down w-4 h-4 animate-bounce transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ShowMoreHide;
