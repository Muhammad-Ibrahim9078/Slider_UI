import React from "react";
import { motion } from "framer-motion";

function Loading({ activeIndex, setActiveIndex }) {
  const progress = ((activeIndex + 1) / setActiveIndex) * 100;

  return (
    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden absolute top-2">
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}

export default Loading;
