import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import { api } from "./api/api";
import Loading from "./components/Loading";
import Buttons from "./components/Buttons"; // ✅ NEW
import IndexNo from "./components/IndexNo";

import img1 from "../public/computers.jpg";
import img2 from "../public/earth.jpg";
import img3 from "../public/hardware.jpg";
import img4 from "../public/cloud.jpg";
import img5 from "../public/it solution.png";
import img6 from "../public/securtiy.jpg";
import img7 from "../public/whychoose.png";

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
          exit={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 p-8">
        <div>
          <Header />
        </div>

        <section className="flex justify-between gap-6 mt-30" id="margin">
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
              <button className="bg-white/10 border rounded-2xl w-40 p-3 mt-6 font-bold hover:scale-110 transition">
                {api[activeIndex].btn}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT CARDS */}
          <motion.div className="flex gap-4 items-center relative h-72" id="cards">
            {visibleCards.map((index) => {
              if (index === activeIndex) return null;

              return (
                <motion.div
                  key={index}
                  layoutId={`image-${index}`}
                  onClick={() => setActiveIndex(index)}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="w-52 h-72 rounded-xl cursor-pointer shadow-2xl shadow-gray-500 z-30"
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


        <div className="fixed bottom-4 left-0 right-0 z-50">
          <div
            className="flex justify-end flex-wrap items-center gap-4 px-8"
            id="forMobile"
          >
            {/* Next / Back Buttons */}
            <Buttons onPrev={prevSlide} onNext={nextSlide} />

            {/* Loading Bar */}
            <Loading activeIndex={activeIndex} total={images.length} />

            {/* Index Numbers of Cards */}
            <IndexNo activeIndex={activeIndex} />
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
