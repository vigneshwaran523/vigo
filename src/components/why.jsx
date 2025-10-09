import React from "react";
import assets from "../assets/assets"; // default import

const whyData = [
  {
    imgSrc:"https://th.bing.com/th/id/R.62267071103f63e80d61ec2c9de3a338?rik=YFRDo2xEGihRWA&riu=http%3a%2f%2fdolcewe.com%2fcdn%2fshop%2farticles%2fBest_curtain_materials.jpg%3fv%3d1695094317&ehk=DujT4wuSbvcWi2ln%2fVmW1tdI7zE8b8BytECkVEjWLnk%3d&risl=&pid=ImgRaw&r=0",
    alt: "Person working on laptop",
    title: "Premium materials",
    description: "Sourced from top manufacturers to ensure durability and elegance."
  },
  {
    imgSrc:"https://harmonyblindsreading.co.uk/images/our-range/Motorised/motorised-venetian-blinds.jpg",
    alt: "Group discussing and sharing pizza",
    title: "Expert craftsmanship",
    description: "Skilled professionals who understand design and functionality."
  },
  {
    imgSrc:"https://tse4.mm.bing.net/th/id/OIP.W4UDEAJphK-6LHX3GR-cSgHaEC?cb=12&w=1100&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "People working together",
    title: "Personalized service",
    description: "Custom solutions tailored to your specific needs and preferences."
  }
];

const Why = () => (
  <section 
   id="why"
   className="bg-white py-20 px-6 md:px-20 text-center max-w-7xl mx-auto">
    <p className="text-xs font-semibold text-gray-700 mb-2">Benefits</p>

    <h2 className="text-3xl md:text-4xl font-serif font-normal max-w-3xl mx-auto mb-4 text-gray-900">
      Why choose our window treatments
    </h2>

    <p className="max-w-xl mx-auto mb-16 text-sm text-gray-600">
      We deliver quality, precision, and style in every design. Our commitment is to transform your space.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {whyData.map(({ imgSrc, alt, title, description }) => (
        <div key={title} className="space-y-4">
          <img
            src={imgSrc}
            alt={alt}
            className="w-full h-40 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <h3 className="text-xl font-serif font-medium text-gray-900">{title}</h3>
          <p className="text-xs font-normal text-gray-600 max-w-xs mx-auto">{description}</p>
        </div>
      ))}
    </div>

  </section>
);

export default Why;
