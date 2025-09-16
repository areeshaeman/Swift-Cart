import React from "react";
import Button from "../../../UI/Button";
import Para from "../../../UI/Para";
const main = () => {
  return (
    <div >
      <section   class="bg-orange-50 py-16">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900">
              Introducing the Ultimate Product
            </h1>
            <Para  title="Track your fitness, answer calls, and stay connected — all from
              your wrist." />
            <Button  title='buy now' />
          </div>
          <div class="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg"
              alt="Smartwatch"
              class="w-full max-w-md mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default main;
