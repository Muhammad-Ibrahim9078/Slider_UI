import { useState } from "react";
import MainContent from "./components/MainContent";

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
  
  return (
    <MainContent
      images={images}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
    />
  );
}

export default App;
