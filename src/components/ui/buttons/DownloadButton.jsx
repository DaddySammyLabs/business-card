import React from "react";

//for download -> npm install html-to-image

const DownloadButton = ({ texts, handleDownload }) => {
  return (
    <>
      <button
        onClick={handleDownload}
        className="mt-6 flex mx-auto animate-bounce duration-700 items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg transition-all"
        tabIndex="0"
      >
        <img
          className="lucide lucide-download w-4 h-4"
          src="/icons/download.svg"
          alt="download"
        />
        {texts.download_card}
      </button>
    </>
  );
};

export default DownloadButton;
