import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Header from "./components/Header";
import { api } from "./api/api";
import Loading from "./components/Loading"

import img1 from "../public/computers.jpg";
import img2 from "../public/earth.jpg";
import img3 from "../public/hardware.jpg";
import img4 from "../public/cloud.jpg";
import img5 from "../public/itSolution.avif";
import img6 from "../public/securtiy.png";
import img7 from "../public/whychoose.png";
import IndexNo from "./components/IndexNo";

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    visibleCards.push((activeIndex + i) % images.length);
  }

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">

      {/* FULL SCREEN ACTIVE CARD */}
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          layoutId={`image-${activeIndex}`}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0.6, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 0.95 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col justify-between h-full p-8">
        <Header />
          <Loading activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>

        <section className="flex justify-between gap-6 mt-5">

          {/* LEFT TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="max-w-xl text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-widest text-sm">
                {api[activeIndex].address}
              </p>
              <h1 className="text-8xl font-bold mt-3" id="text">
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
          <motion.div className="flex gap-4 items-center relative h-72">
            {visibleCards.map((index) => {
              if (index === activeIndex) return null; // 🔥 IMPORTANT

              return (
                <motion.div
                  key={index}
                  layoutId={`image-${index}`}
                  onClick={() => setActiveIndex(index)}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="w-52 h-72 rounded-xl cursor-pointer shadow-3xl shadow-black-500 z-30"
                  style={{
                    backgroundImage: `url(${images[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              );
            })}
          </motion.div>
        </section>

        {/* CONTROLS */}
        <section className="flex justify-center">
          <div className="absolute bottom-11 gap-20">
            <button
              onClick={prevSlide}
              className="bg-white text-black px-6 py-2 rounded-xl font-bold hover:scale-110 transition"
            >
              <FaLessThan />
            </button>

            <button
              onClick={nextSlide}
              className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:scale-110 transition ml-10"
            >
              <FaGreaterThan />
            </button>
          </div>

          <IndexNo activeIndex={activeIndex} />
        </section>
      </div>
    </div>
  );
}

export default App;
