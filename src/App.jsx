import { useState } from "react";
import Header from "./components/Header";
import { api } from "./api/api";

import img1 from "../public/image 2.jfif";
import img2 from "../public/image 1.jfif";
import img3 from "../public/image 3.jfif";

function App() {
  const images = [img1, img2, img3];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="w-full h-[710px] bg-cover bg-center relative transition-all duration-500"
      style={{
        backgroundImage: `url(${images[activeIndex]})`,
      }}
    >
      <Header />

<section className="flex justify-around gap-5 flex-wrap p-8 mt-20">
      {/* LEFT CONTENT (API DATA) */}
      <div className="max-w-xl">
        <div className="text-white">
          <p className="uppercase tracking-widest text-sm">
            {api[activeIndex].address}
          </p>

          <h1 className="text-9xl font-bold mt-3" id="text">
            {api[activeIndex].title}
          </h1>

          <p className="mt-4 text-gray-200">
            {api[activeIndex].descrption}
          </p>

          <button className="bg-gray-200 rounded-2xl w-40 p-2 mt-6 text-black font-black hover:scale-110 transition">
            {api[activeIndex].btn}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="flex flex-wrap gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-40 h-60 cursor-pointer rounded-lg overflow-hidden border-2 transition
              ${
                activeIndex === index
                  ? "border-white scale-110"
                  : "border-gray-400"
              }`}
          >
            <img
              src={img}
              alt="card"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

export default App;
