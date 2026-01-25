import React from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Buttons({ onPrev, onNext }) {
  return (
    <div className="flex gap-6">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="w-20 h-20 flex items-center justify-center cursor-pointer
                   text-white text-2xl 
                   border border-white 
                   rounded-full 
                   hover:scale-110 transition"
      >
        <FaLessThan />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="w-20 h-20 flex items-center justify-center cursor-pointer
                   text-white text-2xl 
                   border border-white 
                   rounded-full 
                   hover:scale-110 transition"
      >
        <FaGreaterThan />
      </button>
    </div>
  );
}

export default Buttons;
