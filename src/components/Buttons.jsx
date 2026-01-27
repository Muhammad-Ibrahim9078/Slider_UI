import React, { memo } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Buttons({ onPrev, onNext }) {
  return (
    <div className="flex gap-4 md:gap-6" id="buttons">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="w-12 h-12 md:w-15 md:h-15 flex items-center justify-center cursor-pointer
                   text-white bg-white/20 text-xl md:text-2xl 
                   border border-white backdrop-blur
                   rounded-full 
                   hover:scale-105 active:scale-95 transition"
      >
        <FaLessThan />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-12 h-12 md:w-15 md:h-15 flex items-center justify-center cursor-pointer
                   text-white bg-white/20 text-xl md:text-2xl 
                   border border-white backdrop-blur
                   rounded-full 
                   hover:scale-105 active:scale-95 transition"
      >
        <FaGreaterThan />
      </button>
    </div>
  );
}

export default memo(Buttons);
