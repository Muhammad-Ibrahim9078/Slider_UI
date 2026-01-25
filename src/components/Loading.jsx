import React from "react";
import { motion } from "motion/react";

function Loading({ activeIndex, total }) {
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <div className="w-[35%] h-2 m- bg-white/30 rounded-full overflow-hidden flex  mr-1 ml-4">
      <motion.div
        className="h-full bg-yellow-300 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Loading;
