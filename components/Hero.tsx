import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-marton-dark">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/construction/1920/1080')` }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white z-10">
        <h2 className="text-marton-orange font-bold text-lg md:text-xl uppercase tracking-widest mb-2">
          Heavy Duty Equipment
        </h2>
        <h1 className="text-4xl md:text-6xl font-black italic uppercase leading-tight mb-6 max-w-2xl">
          Build Stronger <br/> With <span className="text-marton-red">Marton</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl font-light">
          Thailand's leading manufacturer of concrete mixers and construction machinery. Quality you can trust for every project.
        </p>
        <div className="flex space-x-4">
          <button className="bg-marton-red hover:bg-red-700 text-white px-8 py-3 rounded font-bold uppercase tracking-wide transition flex items-center">
            View Products <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-marton-dark text-white px-8 py-3 rounded font-bold uppercase tracking-wide transition">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
