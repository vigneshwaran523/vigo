import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "https://i.pinimg.com/1200x/bc/2a/68/bc2a6816842a2cd5c9dbe0224cb8650a.jpg",
    "https://cdn.mos.cms.futurecdn.net/mphQCH7K6qpdLZcMpovcz4-1920-80.jpg",
    "https://www.housedigest.com/img/gallery/these-are-the-best-bedroom-curtain-colors/l-intro-1683840278.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.1gtXpTkKDlx3XmBUGRWm6QHaFF",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideImage, setSlideImage] = useState(null); // this one slides
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % images.length;

      // set the sliding image
      setSlideImage(images[next]);
      setIsSliding(true);

      setTimeout(() => {
        // update current image after slide finishes
        setCurrentIndex(next);
        setIsSliding(false);
        setSlideImage(null); // remove sliding layer
      }, 900);

    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="hero" className="relative h-[90vh] w-full overflow-hidden">

      {/* FIXED (Current Image) — NEVER MOVES */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* SLIDING IMAGE — ONLY THIS MOVES */}
      {slideImage && (
        <div
          className={`
            absolute inset-0 bg-cover bg-center
            transition-transform duration-900ms ease-in-out
            ${isSliding ? "translate-x-0" : "translate-x-full"}
          `}
          style={{ backgroundImage: `url(${slideImage})` }}
        ></div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 h-full px-8 md:px-20 flex items-center">
        <h1 className="text-4xl md:text-6xl font-normal leading-snug max-w-lg text-black font-serif">
          Elegant curtains <br />
          and <span className="font-semibold">blinds</span> for <br />
          your home
        </h1>

        <div className="absolute right-8 bottom-8 max-w-lg text-right text-black font-serif">
          <p className="text-xs md:text-sm mb-4 max-w-xs">
            Transform your space with precision crafted <br /> window treatments.
            We deliver simple, clean designs that speak volumes.
          </p>

          <div className="flex justify-end gap-4">
            <a
              href="https://docs.google.com/forms/d/1JaOhTo6w11XC7L5u9ubSvK1DfjovUNuN8wSitayBYLY/edit?chromeless=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-100 transition">
                Book Now
              </button>
            </a>

            <button
              onClick={() =>
                document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-yellow-900 bg-opacity-80 text-black px-6 py-2 rounded shadow hover:bg-yellow-900/95 transition"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
