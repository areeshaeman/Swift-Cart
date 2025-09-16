import React from "react";
import { FaShippingFast, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion"; 
import Title from "../../../UI/Title";

const About = () => {
  return (
    <div className="font-sans ">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-10">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title  title="Who We Are"   />
          <p className="text-lg leading-relaxed">
            SwiftCart is a customer-first e-commerce store delivering the best
            products at unbeatable prices. From fashion to electronics, we bring
            convenience to your doorstep.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg"
            alt="Shopping"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </section>
      <motion.section
        className="bg-[tomato] py-16 px-6 text-center "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
        
        <p className="max-w-2xl mx-auto text-lg text-white">
          To create a seamless shopping experience that is fast, secure, and
          enjoyable for everyone—everywhere.
        </p>
      </motion.section>
      <section className="py-20 px-4 md:px-12 bg-white text-gray-800">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
          <Title  title="Why Shop With Us"   />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Experience fast delivery, trusted quality, and 24/7 customer support that truly cares.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[tomato]/10 text-[tomato] p-4 rounded-full text-2xl">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
            </div>
            <p className="text-gray-600">
              Nationwide shipping with real-time tracking to get your order to your door fast.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[tomato]/10 text-[tomato] p-4 rounded-full text-2xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
            </div>
            <p className="text-gray-600">
              Carefully curated, top-tier products that meet global quality standards.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300"
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[tomato]/10 text-[tomato] p-4 rounded-full text-2xl">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-bold">24/7 Support</h3>
            </div>
            <p className="text-gray-600">
              Our friendly support team is always available to help you with anything.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default About;
