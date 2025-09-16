import React from "react";
import Button from "../../../UI/Button";
const Hero = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            It’s all About <span className="text-orange-600">New Year</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover your luxe style. Ethically sourced, consciously crafted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button title="Shop Now"    className="bg-orange-500"    />
            <Button title="About Us" />
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img
            src="https://i.pinimg.com/736x/1a/f3/b4/1af3b4212eae2c3104f277dc3978c631.jpg" 
            alt="Ring 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="https://i.pinimg.com/736x/66/4b/9a/664b9a97d072a3bf7e58f1064d5c76fc.jpg"
            alt="Ring 2"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
