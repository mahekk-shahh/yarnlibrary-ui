import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-15 pt-10 m-auto bg-white">
      <Card className="py-0 bg-transparent mx-5 md:mx-20">
        <div className="text-center bg-indigo-50 backdrop-blur-2xl border rounded-xl py-15 px-10 shadow-xl shadow-black/10">
          {/* Heading */}
          <h1 className="text-lg sm:text-3xl font-semibold mb-6">
            Join the Yarn Community
          </h1>

          {/* Subheading */}
          <p className="text-sm mb-12">
            Whether you're <span className="font-medium">selling</span>,{" "}
            <span className="font-medium">buying</span> or looking for{" "}
            <span className="font-medium">expert guidance</span>,{" "}
            <span className="text-indigo-800 font-semibold">Yarn Library</span>{" "}
            is the trusted platform for everything yarn.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <Button size="lg" onClick={() => navigate("/contact")}>
              Become a Seller
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/yarns")}
            >
              Explore
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default CallToAction;
