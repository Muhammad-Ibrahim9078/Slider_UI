import React from "react";
import { motion } from "framer-motion";

function Loading({ activeIndex, total }) {
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <div className="flex items-center gap-4 ml-4">
      {/* DOT LOADER (MERGING EFFECT) */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = index === activeIndex;
          const isPassed = index < activeIndex;

          return (
            <motion.div
              key={index}
              layout
              className={`
                h-2.5 rounded-full
                ${
                  isActive || isPassed
                    ? "bg-yellow-400 shadow-[0_0_6px_rgba(253,224,71,0.9)]"
                    : "bg-white/30"
                }
              `}
              initial={false}
              animate={{
                width: isActive ? 22 : 10,
                opacity: isActive || isPassed ? 1 : 0.4,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* PROGRESS BAR */}
      <div className="w-[360px]" id="hide">
        <div className="relative h-[3px] rounded-full bg-white/10 overflow-hidden">
          {/* Glow */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-[8px]
                       bg-yellow-400/40 blur-md rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Main Bar */}
          <motion.div
            className="h-full rounded-full
                       bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
