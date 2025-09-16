import Slider from "react-slick";
import Button from "../../../UI/Button";
const slides = [
  {
    id: 1,
    title: "Trending item",
    title1:"Women's latest fashion sale",
    desc: "starting at $ 20.00",
    bg: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-1.jpg",
  },
  {
    id: 2,
    title: "New Arrivals",
    desc: "Latest fashion trends just dropped.",
    bg: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-2.jpg",
  },
  {
    id: 3,
    title: "Electronics Deals",
    desc: "Save big on gadgets and accessories.",
    bg: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-3.jpg",
  },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero-slider  h-[calc(100vh-74px)]  overflow-hidden   ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
              }}
            >
              <div className="overlay">
                <h1>{slide.title}</h1>
                <h2>
                  {slide.title1}
                </h2>
                <p>{slide.desc}</p>
               <Button text="Shop now " className="btn1" />      
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
