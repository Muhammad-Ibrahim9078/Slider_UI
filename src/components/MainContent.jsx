import { motion, AnimatePresence } from "framer-motion";
import { VscDebugStart } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";
import Header from "./Header";
import { api } from "../api/api.js";
import Loading from "./Loading";
import Buttons from "./Buttons";
import IndexNo from "./IndexNo";

function MainContent({
  images,
  activeIndex,
  setActiveIndex,
  nextSlide,
  prevSlide,
}) {
  const visibleCards = [];
  for (let i = 0; i < 5; i++) {
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

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end p-8">
        <section className="flex justify-between flex-wrap items-center">

          {/* LEFT TEXT */}
          <div className="w-[650px] h-full pb-125 relative overflow-hidden" id="resForMobile">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="absolute inset-0 text-white"
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

                {/* BUTTONS */}
                <div className="flex gap-6 items-center">
                  {/* GOLD BUTTON */}
                  <button
                    className="
                      bg-gradient-to-r from-[#FFD700] via-[#FFCC33] to-[#C99700]
                      text-black flex items-center gap-3
                      font-extrabold cursor-pointer
                      rounded-full px-6 py-3 mt-6
                      shadow-lg shadow-yellow-500/30
                      transition-all duration-300
                      hover:scale-105 hover:shadow-xl
                      active:scale-95
                    "
                  >
                    {api[activeIndex].btn}
                    <GrLinkNext />
                  </button>

                  {/* SECONDARY BUTTON */}
                  <button
                    className="
                      bg-white/10 backdrop-blur-md
                      text-white flex items-center gap-3
                      rounded-full px-6 py-3 mt-6
                      font-semibold cursor-pointer
                      border border-white/20
                      transition-all duration-300
                      hover:bg-white/20 hover:scale-105
                      active:scale-95
                    "
                  >
                    {api[activeIndex].btn2}
                    <VscDebugStart />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CARDS WITH HEADINGS */}
          <motion.div className="flex gap-4 h-72 mt-20" id="cards">
            {visibleCards.map((index) => {
              if (index === activeIndex) return null;

              return (
                <motion.div
                  key={index}
                  layoutId={`image-${index}`}
                  onClick={() => setActiveIndex(index)}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="relative w-45 h-65 rounded-xl cursor-pointer shadow-2xl shadow-gray-500 overflow-hidden group"
                  style={{
                    backgroundImage: `url(${images[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />

                  {/* Heading inside card */}
                  <h3 className="absolute bottom-3 left-3 text-white font-bold text-sm z-10 drop-shadow-md">
                    {api[index].title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* BOTTOM CONTROLS */}
        <div className="fixed left-0 right-0 z-50">
          <div className="flex justify-end items-center flex-wrap gap-4 px-8" id="forMobile">
            <Buttons onPrev={prevSlide} onNext={nextSlide} />
            <div id="loader">
              <Loading activeIndex={activeIndex} total={images.length} />
            </div>
            <IndexNo activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
