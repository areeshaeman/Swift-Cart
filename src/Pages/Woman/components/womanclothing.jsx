import React from "react";
import Para from "../../../UI/Para";
import Button from "../../../UI/Button";
const Womanclothing = () => {
  return (
    <div>
      <section class="bg-orange-50 py-16">
        <div class="container mx-auto px-15 flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
              Fashion should be <span class="text-orange-500">Stylish</span> and
              Fun
            </h1>
            <Para  title="One for all and all for one. Wardrobes are always ready. One for
              all and you feeling wonderful."/>
          </div>
          <div class="lg:w-1/4 flex justify-center">
            <img
              src="https://surfshark.com/wp-content/uploads/2024/10/the-best-vpn-for-keeping-multiple-devices-safe-at-all-times-671f51fc23e65.webp"
              alt="Fashion"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Womanclothing;
