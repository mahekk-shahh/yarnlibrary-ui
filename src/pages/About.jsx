import React from "react";
import { CheckCircle2 } from "lucide-react";

const Feature = ({ text }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2
      size={18}
      className="text-white bg-indigo-600 rounded-full p-0.5 mt-1"
    />
    <p className="text-sm leading-relaxed">{text}</p>
  </div>
);

const FeatureCard = ({ image, title, items }) => (
  <div className="group bg-white border rounded-2xl p-6 shadow-sm">
    <div className="flex justify-center mb-5">
      <img
        src={image}
        alt=""
        className="h-32 object-contain"
      />
    </div>

    <h3 className="text-lg font-semibold text-center mb-5">{title}</h3>

    <div className="space-y-3">
      {items.map((item, i) => (
        <Feature key={i} text={item} />
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-indigo-600 font-semibold mb-2">ABOUT US</p>

            <h1 className="text-4xl font-bold mb-5 leading-tight">
              Connecting Yarn Suppliers & Buyers Worldwide
            </h1>

            <p className="text-gray-600 leading-relaxed">
              <b>Yarn Library</b> is a platform designed to bring yarn
              suppliers, buyers, and industry professionals together in one
              place. Our goal is to make discovering yarns easier and help
              businesses connect directly without unnecessary intermediaries.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether you are looking to showcase your yarn collections,
              discover new materials, or gain expert guidance, Yarn Library
              provides a reliable and efficient ecosystem for the textile
              community.
            </p>
          </div>

          <div className="flex justify-center">
            <img src={"./images/about.jpg"} alt="" className="w-[420px]" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-16"></div>

        {/* What We Do */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What We Offer</h2>

            <p className="text-gray-600 max-w-xl mx-auto">
              Yarn Library creates opportunities for suppliers, buyers, and yarn
              professionals to connect, explore, and grow together within a
              dedicated ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              image={"./images/about_1.jpg"}
              title="For Sellers"
              items={[
                "Showcase your yarn developments to a global audience.",
                "Promote your yarn collections to targeted buyers.",
                "Receive direct inquiries from interested businesses.",
                "Expand your reach without intermediaries.",
              ]}
            />

            <FeatureCard
              image={"./images/about_2.jpg"}
              title="For Buyers"
              items={[
                "Explore yarn developments from multiple suppliers.",
                "Discover a wide range of yarn varieties.",
                "Connect directly with sellers for better deals.",
                "Compare options and choose the perfect yarn.",
              ]}
            />

            <FeatureCard
              image={"./images/about_3.jpg"}
              title="For Yarn Professionals"
              items={[
                "Provide expert consultations on yarn selection.",
                "Share industry insights and best practices.",
                "Build credibility within the yarn community.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
