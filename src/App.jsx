import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { api } from "./api/api";

import img1 from "../public/image 2.jfif";
import img2 from "../public/image 1.jfif";
import img3 from "../public/image 3.jfif";
import img4 from "../public/img4.jpg";
import img5 from "../public/img 5.avif";
import IndexNo from "./components/IndexNo";

function App() {
  const images = [img1, img2, img3, img4, img5];
  const [activeIndex, setActiveIndex] = useState(0);

  // NEXT / PREV BUTTONS
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get max 4 cards to display
  const visibleCards = [];
  for (let i = 0; i < Math.min(4, images.length); i++) {
    visibleCards.push(images[(activeIndex + i) % images.length]);
  }

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">

      {/* 🌆 BACKGROUND IMAGE */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          layoutId={`image-${activeIndex}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[activeIndex]})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* CONTENT */}
      <motion.div className="relative z-10 flex flex-col justify-between h-full p-8">
        <Header />

        <section className="flex justify-between gap-6 mt-5">

          {/* LEFT TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="max-w-xl text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1,
              }}
            >
              <p className="uppercase tracking-widest text-sm">
                {api[activeIndex].address}
              </p>

              <h1 className="text-8xl font-bold mt-3">
                {api[activeIndex].title}
              </h1>

              <p className="mt-4 text-gray-200">
                {api[activeIndex].descrption}
              </p>

              <button className="bg-white text-black rounded-2xl w-40 p-3 mt-6 font-bold hover:scale-110 transition">
                {api[activeIndex].btn}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT CARDS */}
          <div className="flex gap-4 items-center">
            {visibleCards.map((img, index) => {
              const realIndex = (activeIndex + index) % images.length;

              return (
                <motion.div
                  key={realIndex}
                  layoutId={`image-${realIndex}`}
                  onClick={() => setActiveIndex(realIndex)}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`w-40 h-60 rounded-xl cursor-pointer
                    ${
                      index === 0
                        ? "scale-110 border-2 border-white z-0"
                        : " border border-gray-400 z-30"
                    }
                  `}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              );
            })}
          </div>
        </section>

        {/* BUTTONS */}
        <div className="flex justify-center gap-10 pt-30">
          <button
            onClick={prevSlide}
            className="bg-white text-black px-6 py-2 rounded-xl font-bold hover:scale-110 transition"
          >
            Back
          </button>

          <button
            onClick={nextSlide}
            className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:scale-110 transition"
          >
            Next
          </button>

          {/* INDEX */}
          <IndexNo activeIndex={activeIndex} />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
