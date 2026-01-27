import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MainContent from "./components/MainContent";
import SplashScreen from "./components/SplashScreen";

import img1 from "../public/computers.jpg";
import img2 from "../public/earth.jpg";
import img3 from "../public/hardware.jpg";
import img4 from "../public/cloud.jpg";
import img5 from "../public/it solution.png";
import img6 from "../public/securtiy.jpg";
import img7 from "../public/whychoose.png";

// Keep images array stable so it isn't recreated on every render
const images = [img1, img2, img3, img4, img5, img6, img7];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload all images before showing main content
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    const preloadImages = () => {
      images.forEach((imgSrc) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          // Wait for all images to load, minimum 1 second for smooth UX
          if (loadedCount === totalImages) {
            setTimeout(() => {
              setIsLoading(false);
            }, 800); // Small delay for smooth transition
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setTimeout(() => {
              setIsLoading(false);
            }, 800);
          }
        };
        img.src = imgSrc;
      });
    };

    preloadImages();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);
  
  return (
    <>
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      
      {!isLoading && (
        <MainContent
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </>
  );
}

export default App;
