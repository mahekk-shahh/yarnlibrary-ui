import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ title, image, description }) => {
  return (
    <Card className="max-w-sm mx-auto rounded-xl border border-gray-200 duration-300 bg-white">
      <CardContent className="flex flex-col p-6 gap-4">
        {/* Small Icon */}
        <div className="rounded-full">
          <img src={image} alt={title} className="h-20 m-auto object-contain" />
        </div>

        {/* Title */}
        <h3 className="text-lg text-center font-semibold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
