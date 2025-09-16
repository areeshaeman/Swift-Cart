import React from "react";

const Manclothing = () => {
  return (
    <div>
      <section class="bg-orange-50 py-16">
        <div class="container mx-auto px-15 flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
              A byte of <span class="text-orange-500">Stylish</span> 
            </h1>
            <h1 class="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
                and trending look
            </h1>
          </div>
          <div class="lg:w-1/2 flex justify-center">
            <img
              src="https://forgecraftmensjewelry.com/cdn/shop/articles/minimalist-mens-fashion-beige-shirt-and-trousers.jpg?v=1737391858&width=1100"
              alt="Fashion"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manclothing;
