import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const bg_images = [
  './images/bg-home-1.jpg',
  './images/bg-home-2.jpg',
  './images/bg-home-3.jpg',
  './images/bg-home-4.jpg',
  './images/bg-home-5.jpg',
  './images/bg-home-6.jpg',
  './images/bg-home-7.jpg',
  './images/bg-home-8.jpg',
  './images/bg-home-9.jpg',
  './images/bg-home-10.jpg',
];

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
};

const HomeSlider = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden py-10">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <Slider {...settings} className="h-full **:h-full">
          {bg_images.map((item, index) => (
            <div key={index} className="w-full h-full">
              <img src={item} className="w-full min-h-screen object-cover" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center px-6 min-h-screen">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-2xl p-10 max-w-2xl text-center">
          <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-6">
            Find, Connect & Source <br /> Quality Yarn Effortlessly
          </h1>

          <p className="text-white/90 text-lg mb-8">
            Your one-stop destination to discover premium yarns, connect with
            trusted suppliers, and get expert advice for fabrics.
          </p>

          <Link to="/listing">
            <Button size="lg" className="border-2">
              Explore Yarns
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;