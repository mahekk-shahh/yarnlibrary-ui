import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";
import url from "@/components/url";

const SuppliersCard = ({ supplier }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300 cursor-pointer"
      onClick={() => {
        navigate(`/listing/company/${supplier.id}`);
      }}
    >
      <CardContent className="text-center">
        <img
          src={supplier.logo_url}
          alt={supplier.company}
          className="w-full object-contain m-auto rounded"
        />
        <CardTitle>{supplier.company}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default SuppliersCard;
