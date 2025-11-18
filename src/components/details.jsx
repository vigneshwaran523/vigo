import React from "react";
// Import icons from react-icons
import {  FiScissors, FiTruck, FiHeadphones } from "react-icons/fi";
import { GiTheaterCurtains } from 'react-icons/gi';
import { MdMiscellaneousServices } from 'react-icons/md';

const Details = () => {
  return (
    <section className="bg-amber-50 py-20 px-6 md:px-20 text-center font-serif">
      {/* Small title */}
      <h3 className="text-xs font-semibold uppercase tracking-wide mb-2 text-black/60">
        Services
      </h3>

      {/* Main headline */}
      <h2 className="text-3xl md:text-4xl font-normal max-w-3xl mx-auto mb-4 text-black">
        Premium window treatments for every space
      </h2>

      {/* Subheading */}
      <p className="max-w-lg mx-auto mb-14 text-sm text-black/70">
        We design window solutions that match your unique style and functional needs.
      </p>

      {/* Three services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
        {/* Service 1 */}
        <div>
          <div className="mb-4 text-3xl text-black flex justify-center">
            <GiTheaterCurtains size={40} />
          </div>
          <h4 className="font-semibold text-xl mb-2 text-black">Custom curtains and Blinds</h4>
          <p className="text-xs text-black/70 max-w-xs mx-auto">
            Tailored designs that fit your windows perfectly.
          </p>
        </div>

        {/* Service 2 */}
        <div>
          <div className="mb-4 text-3xl text-black flex justify-center">
            <MdMiscellaneousServices size={40} />
          </div>
          <h4 className="font-semibold text-xl mb-2 text-black">
            Professional installation
          </h4>
          <p className="text-xs text-black/70 max-w-xs mx-auto">
            Expert team ensures precise and clean fitting.
          </p>
        </div>

        {/* Service 3 */}
        <div>
          <div className="mb-4 text-3xl text-black flex justify-center">
            <FiHeadphones size={40} />
          </div>
          <h4 className="font-semibold text-xl mb-2 text-black">Free consultation</h4>
          <p className="text-xs text-black/70 max-w-xs mx-auto">
            Personalized advice to help you choose the right window treatment.
          </p>
        </div>
      </div>

      {/* Buttons 
      <div className="flex justify-center items-center gap-6">
        <button className="bg-amber-100 text-black font-normal text-sm py-2 px-6 rounded shadow hover:bg-amber-200 transition">
          Explore
        </button>
        <button className="text-black font-normal text-sm flex items-center gap-1 hover:underline">
          Contact <span>›</span>
        </button> 
      </div> */}
    </section>
  );
};

export default Details;

