// src/components/Hero.jsx
import React from "react";
import { assets } from "../assets/assets"; 

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="hero"
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${"https://i.pinimg.com/1200x/bc/2a/68/bc2a6816842a2cd5c9dbe0224cb8650a.jpg"})` }}
    >
      {/* Uncomment and use gradient overlay if needed */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-black/75"></div> */}

      {/* Content container */}
      <div className="relative z-10 h-full px-8 md:px-20 flex items-center">
        {/* Left side heading */}
        <h1 className="text-4xl md:text-6xl font-normal leading-snug max-w-lg text-black font-serif">
          Elegant curtains <br />
          and <span className="font-semibold">blinds</span> for <br />
          your home
        </h1>

        {/* Right bottom content - positioned absolute bottom right */}
        <div className="absolute right-8 bottom-8 max-w-lg text-right text-black font-serif">
          <p className="text-xs md:text-sm mb-4 max-w-xs">
  Transform your space with precision crafted <br /> window treatments. We
  deliver simple, clean designs that speak volumes.
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
            <button onClick={() => scrollToSection("why")} className="bg-yellow-900 bg-opacity-80 text-black px-6 py-2 rounded shadow hover:bg-yellow-900/95 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
