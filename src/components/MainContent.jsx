import { motion, AnimatePresence } from "framer-motion";
import { VscDebugStart } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";
import Header from "./Header";
import { api } from "../api/api.js";
import Loading from "./Loading";
import Buttons from "./Buttons";
import IndexNo from "./IndexNo";
import React from "react";

function MainContent({
  images,
  activeIndex,
  setActiveIndex,
  nextSlide,
  prevSlide,
}) {

  // 1️⃣ Function to determine how many cards to show based on screen width
  function getVisibleCardCount() {
    const width = window.innerWidth;

    if (width < 840) return 2;
    if (width >= 840 && width < 899) return 5;
    if (width >= 900 && width < 1100) return 6;
    if (width >= 1125 && width < 1300) return 7;

    return 5; // large screens
  }

  // 2️⃣ Dynamic visible cards
  const visibleCount = getVisibleCardCount();
  const visibleCards = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleCards.push((activeIndex + i) % images.length);
  }

  // 3️⃣ Update visible cards on window resize
  React.useEffect(() => {
    function handleResize() {
      setActiveIndex(prev => prev); // simple re-render trigger
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black" >

      {/* FULL SCREEN ACTIVE CARD WITH CARD-TO-BG ANIMATION */}
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
          initial={{ opacity: 0.6, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-6 lg:p-8" id="tabMar">
        <section className="flex flex-col lg:flex-row justify-between flex-wrap items-start lg:items-center gap-6 md:gap-8" id="tabRes">

          {/* LEFT TEXT */}
          <div className="w-full md:w-[650px] h-full pb-125 relative overflow-hidden px-2 md:px-0" id="resForMobile">
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                className="absolute inset-0 text-white"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 0.9, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.9, 
                  ease: "easeOut",
                  delay: 0.3 
                }}
              >
                <p className="uppercase tracking-widest text-xs md:text-sm">
                  {api[activeIndex].address}
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mt-2 md:mt-3" id="text">
                  {api[activeIndex].title}
                </h1>

                <p className="mt-3 md:mt-4 text-gray-200 text-sm md:text-base max-w-full md:max-w-[600px]">
                  {api[activeIndex].descrption}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-stretch sm:items-center mt-4 md:mt-6">
                  {/* GOLD BUTTON */}
                  <button className="bg-gradient-to-r from-[#FFD700] via-[#FFCC33] to-[#C99700] text-black flex items-center justify-center gap-2 md:gap-3 font-extrabold cursor-pointer rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base shadow-lg shadow-yellow-500/30 transition-all duration-300 ease-out hover:shadow-yellow-500/60 hover:brightness-110 active:scale-95">
                    {api[activeIndex].btn}
                    <GrLinkNext className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                  </button>

                  {/* SECONDARY BUTTON */}
                  <button className="bg-white/10 backdrop-blur-md text-white flex items-center justify-center gap-2 md:gap-3 rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold cursor-pointer border border-white/20 transition-all duration-300 ease-out hover:bg-white/20 hover:shadow-lg active:scale-95">
                    {api[activeIndex].btn2}
                    <VscDebugStart className="w-4 h-4 md:w-5 md:h-5 pointer-events-none" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT CARDS WITH HEADINGS */}
          <motion.div className="flex gap-3 md:gap-4 h-auto md:h-72 mt-8 md:mt-12 lg:mt-20 overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full lg:w-auto scrollbar-hide" id="cards">
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
        <div className="fixed left-0 right-0 bottom-0 z-50 pb-4 md:pb-8" id="controls">
          <div className="flex justify-center md:justify-end items-center flex-wrap gap-3 md:gap-4 px-4 md:px-8" id="forMobile">
            <Buttons onPrev={prevSlide} onNext={nextSlide} />
            <div id="loader" className=" md:block">
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
