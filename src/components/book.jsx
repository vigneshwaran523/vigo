// src/components/Book.jsx
import React from "react";

const Book = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-serif font-semibold mb-4">
        Ready to transform <br /> your windows
      </h2>
      <p className="text-sm text-gray-700 mb-8">
        Schedule a free consultation and discover how we can elevate your space with our window treatments.
      </p>
      
      <div className="flex justify-center space-x-4">
        <a
              href="https://docs.google.com/forms/d/1JaOhTo6w11XC7L5u9ubSvK1DfjovUNuN8wSitayBYLY/edit?chromeless=1"
              target="_blank"
              rel="noopener noreferrer"
            >
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded shadow-sm transition">
          Book now
        </button>
        </a>
      </div>
    </section>
  );
};

export default Book;
