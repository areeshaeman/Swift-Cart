import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Products from "./components/product";  
import Testimonial from "./components/Testimonial";  
import DiscountBanner from "./components/Discount";
import './../Home/Home.css';
export default function Home() {
  return (
    <>
     <Hero />
     <Products />
     <DiscountBanner />
     <About />
     <Testimonial />
     <Footer />
    </>
  );
}
