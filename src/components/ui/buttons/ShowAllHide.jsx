import React from "react";

// const [showAll, setShowAll] = useState(false);
// const visiblePhotos = showAll ? photos : photos.slice(0, 4);

const ShowAllHide = ({ hide_photos, all_photos, showAll, setShowAll }) => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-rose-500 text-white rounded-md shadow hover:bg-rose-600 transition-all duration-300 flex items-center gap-2"
        >
          <span>{showAll ? `${hide_photos}` : `${all_photos}`}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-transform animate-bounce h-4 w-4  ${showAll ? "rotate-180" : ""}`}
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ShowAllHide;
