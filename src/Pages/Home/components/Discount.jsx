import React from "react";
 import { motion } from "framer-motion";
import Para from "../../../UI/Para";
const DiscountBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-4"
      style={{
        backgroundImage: "url('https://thumbs.dreamstime.com/z/fashion-flat-lay-composition-place-your-text-frame-made-women-s-cosmetics-accessories-peach-background-169245650.jpg?ct=jpeg ' ) ", 
      }}
    >
      <div className="max-w-md mx-auto backdrop-blur-md p-8 rounded-xl text-center shadow-lg">
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-md mx-auto bg-white/90 backdrop-blur-xl p-8 rounded-xl text-center shadow-2xl border border-gray-200"
      >
        <Para   title=" 🎉 25% Discount"  />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Summer Collection
        </h2>
        <p className="text-gray-600 mb-6 text-sm">Starting from just $10</p>
        
        
        <a
          href="#"
          className="inline-block text-sm font-semibold text-white bg-[tomato] px-6 py-2 rounded-full hover:bg-[#ff6347d9] transition duration-300 shadow-md"
        >
          SHOP NOW
        </a>
      </motion.div>
      </div>
    </section>
  );
};

export default DiscountBanner; 