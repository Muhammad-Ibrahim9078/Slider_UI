import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { api } from "./api/api";

import img1 from "../public/image 2.jfif";
import img2 from "../public/image 1.jfif";
import img3 from "../public/image 3.jfif";
import img4 from "../public/img4.jpg";
import IndexNo from "./components/IndexNo";

function App() {
  const images = [img1, img2, img3, img4];
  const [activeIndex, setActiveIndex] = useState(0);

  // Next / Back functions
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ✅ Rotate images so current active card comes first
  const orderedImages = [
    ...images.slice(activeIndex),
    ...images.slice(0, activeIndex),
  ];

  const orderedApi = [
    ...api.slice(activeIndex),
    ...api.slice(0, activeIndex),
  ];

  return (
    <div className="w-full h-[710px] relative overflow-hidden  bg-gray-500">

      {/* 🌆 BACKGROUND IMAGE */}
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          layoutId={`image-${activeIndex}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[activeIndex]})` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="relative z-10">
        <Header />

        <section className="flex justify-between gap-5 p-8 mt-20">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <p className="uppercase tracking-widest text-sm">
              {api[activeIndex].address}
            </p>

            <h1 className="text-7xl font-bold mt-3 text-8xl" id="text">
              {api[activeIndex].title}
            </h1>

            <p className="mt-4 text-gray-200">
              {api[activeIndex].descrption}
            </p>

            <button className="bg-gray-200 rounded-2xl w-40 p-2 mt-6 text-black font-black hover:scale-110 transition">
              {api[activeIndex].btn}
            </button>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="flex gap-4">
            {orderedImages.map((img, index) => {
              // Calculate real index for animation and key
              const realIndex = (activeIndex + index) % images.length;

              return (
                <motion.div
                  key={realIndex}
                  layoutId={`image-${realIndex}`}
                  className={`w-40 h-60 rounded-lg overflow-hidden border-2 cursor-pointer
                    ${
                      index === 0
                        ? "border-white scale-110"
                        : "border-gray-400 opacity-60"
                    }`}
                  onClick={() => setActiveIndex(realIndex)}
                >
                  <img
                    src={img}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 🔥 NEXT / BACK BUTTONS */}
        <div className="flex justify-center gap-10 mt-20">
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

        </div>
      </div>

<IndexNo activeIndex={activeIndex}/>      
    </div>
  );
}

export default App;
