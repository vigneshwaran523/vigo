// src/components/How.jsx
import React from "react";

const How = () => {
  return (
    <div className="bg-blue-50 py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-sm text-gray-600 font-semibold uppercase mb-2">Process</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-2">
          How we transform your windows
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Our streamlined process ensures a smooth and satisfying experience from start to finish.
        </p>
      </div>

      <div>
        <img 
          src="https://www.thespruce.com/thmb/FGjnyTkM43kFSfLofHNyP64r7wo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SFShowcaseMasterBedroom-02-7e13919dd5574f40bc03d9bdb796de0d.jpg" 
          alt="Consultation" 
          className="w-full rounded-lg shadow-lg object-cover max-h-[400px] mx-auto"
        />
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-between text-center space-y-8 sm:space-y-0 sm:space-x-6 max-w-5xl mx-auto">
        <div className="flex-1">
          <hr className="border-gray-300 mb-3 w-16 mx-auto"/>
          <h3 className="font-semibold text-sm mb-1">Initial consultation</h3>
          <p className="text-xs text-gray-600 max-w-xs mx-auto">
            Meet with our experts to discuss your vision, style preferences, and functional requirements.
          </p>
        </div>

        <div className="flex-1">
          <hr className="border-gray-300 mb-3 w-16 mx-auto"/>
          <h3 className="font-semibold text-sm mb-1">Design and selection</h3>
          <p className="text-xs text-gray-600 max-w-xs mx-auto">
            Choose from our curated collection or create a custom design that matches your space.
          </p>
        </div>

        <div className="flex-1">
          <hr className="border-gray-300 mb-3 w-16 mx-auto"/>
          <h3 className="font-semibold text-sm mb-1">Professional installation</h3>
          <p className="text-xs text-gray-600 max-w-xs mx-auto">
            Our skilled team ensures precise fitting and a flawless finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default How;
