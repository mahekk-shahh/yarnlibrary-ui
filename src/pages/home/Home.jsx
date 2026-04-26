import { images_assets } from "../../assets/images";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/pages/home/ServiceCard";
import HomeSlider from "@/pages/home/HomeSlider";
import NewsSection from "./NewsSection";
import ProductsSection from "./ProductsSection";

const features = [
  {
    i: 2.5,
    src: images_assets.why_choose_1,
    alt: "img 1",
    title: "Direct Connections",
    description: "Buyers connect with sellers instantly.",
    bg: "linear-gradient(to bottom left, #6D0B86 10%, #C589D5, #F5CCFF)",
  },
  {
    i: 3.5,
    src: images_assets.why_choose_2,
    alt: "img 2",
    title: "Trusted Sellers",
    description: "Verified suppliers offering high-quality yarns.",
    bg: "linear-gradient(to bottom left, #1E7D01 10%, #62C046, #9DF981)",
  },
  {
    i: 4.5,
    src: images_assets.why_choose_3,
    alt: "img 3",
    title: "Industry Expertise",
    description: "Get expert advice from yarn professionals.",
    bg: "linear-gradient(to bottom left, #C77B00 10%, #F5D9AD, #FFEFD4)",
  },
  {
    i: 5.5,
    src: images_assets.why_choose_4,
    alt: "img 4",
    title: "Seamless Experience",
    description:
      "A simple, intuitive platform designed for all your yarn needs.",
    bg: "linear-gradient(to left, #A00104 10%, #E18B8D, #FFCACB)",
  },
];

const Home = () => {
  return (
    <div>
      <HomeSlider />
      {/* Services */}
      <div className="pb-5 service-main">
        <div className="text-center">
          <h2 className="font-semibold text-3xl mb-4">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-7 pb-5">
            {/* Cards */}
            <ServiceCard
              id="1"
              image={images_assets.services_1}
              title="Find Suppliers Globally"
              description="Easily connect with trusted yarn suppliers for your needs."
            />

            <ServiceCard
              id="2"
              image={images_assets.services_2}
              title="Showcase Your Yarn"
              description="List your yarns and reach buyers looking for quality yarns."
            />

            <ServiceCard
              id="3"
              image={images_assets.services_3}
              title="Get Expert Guidance"
              description="Learn from industry experts and get the best advice on yarns."
            />
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <section className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Why <span className="text-blue-700">Choose Us</span>?
            </h2>
            <p className="text-lg text-gray-600">
              We combine innovation, reliability, and user-focused yarn, design
              development and fabrics to deliver services that make a real
              difference.
            </p>
          </div>

          {/* ✅ Right Side – Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Card
                key={i}
                className="border border-gray-200 rounded-2xl shadow-md"
              >
                <CardContent className="py-2 flex flex-col items-start">
                  <div
                    className="w-14 h-14 mb-4 flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: f.bg }}
                  >
                    <img src={f.src} alt={f.alt} className="w-14 h-14" />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{f.title}</h4>
                  <p className="text-sm">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Yarns */}
      <ProductsSection />

      {/* News Cards */}
      <NewsSection />
    </div>
  );
};

export default Home;
