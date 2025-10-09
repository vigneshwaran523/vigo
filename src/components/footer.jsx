import assets from "../assets/assets"
import React, { useState } from "react";
import { LuPhoneCall } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Google Forms URL + entry ID
      const formData = new FormData();
      formData.append("entry.1370188203", email); // Replace with your Google Form entry ID

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdgY-WvAQvB11PySERTL7O8Kx7lfE9lmn7t7O0hDjutfflmKA/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required to bypass browser CORS restrictions
        }
      );

      // Show success popup (cannot confirm real success)
      setSuccessPopup(true);
      setEmail("");
      setTimeout(() => setSuccessPopup(false), 3000);
    } catch (err) {
      // Usually this catch won't trigger due to no-cors
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
    id="footer" 
     className="bg-black text-gray-300 relative" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={assets.logo} alt="" />

          <p className="mb-4 text-sm">
            Stay updated with our latest designs and promotions
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex space-x-2 mb-2"
            aria-label="Subscription form"
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <button
              type="submit"
              className={`bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 text-sm rounded transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Subscribe"}
            </button>
          </form>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <p className="text-xs text-gray-500">
            By subscribing, you agree to our privacy policy and consent to receive updates.
          </p>
        </div>
      

      {successPopup && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Subscription Success!
        </div>
        )}
        {/* Company */}
    <div>
      <h3 className="text-white font-semibold mb-3">Services</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:underline">About us</a></li>
        
        
        <li><a href="#" className="hover:underline">Contact</a></li>
        
      </ul>
    </div>

    {/* contact */}
    <div>
      <h3 className="text-white font-semibold mb-3">Contacts</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="tel:+919080372904" className="flex items-center gap-2"> <LuPhoneCall className="text-2xl"/> <span>+919080372904</span>  </a></li>
        <li><a href="https://wa.me/9080372904" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"> <FaWhatsapp className="text-2xl"/> <span>9080372904</span>  </a></li>
        <li><a href="mailto:vigodecors@gmail.com?subject=Enquiry&body=Hello, I want to know more about your products" className="flex items-center gap-2"> <FiMail className="text-2xl"/> <span>vigodecors@gmail.com</span>  </a></li>
      </ul>
    </div>

    {/* Instagram */}
    <div>
      <h3 className="text-white font-semibold mb-3">Social Media</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="https://www.facebook.com/profile.php?id=61576129895011" target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 hover:underline"><FaFacebook className="text-2xl"/>  Facebook</a></li>
        <li><a href="https://www.instagram.com/vigo_decors/" target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 hover:underline">< FaInstagram className="text-2xl"/>Instagram</a></li>
      </ul>
      <p className="mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Vigo decors All rights reserved.
      </p>
      <a  className="text-xs text-gray-500 hover:underline block mt-1">
        Privacy policy
      </a>
    </div>
  

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
    <p>Terms of service</p>
    <div className="space-x-4">
      <button className="flex items-center gap-2 underline hover:text-gray-400 cursor-pointer">Cookies settings</button>
    </div>
  </div>
  </div>


  
      
    </footer>
  );
};

export default Footer;
