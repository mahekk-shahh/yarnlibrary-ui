import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ExhibitionCard = ({ exhibition }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="p-3"
      onClick={() => navigate(`/exhibitions/${exhibition.id}`)}
    >
      <div className="text-center">
        <img
          src={exhibition.image_url}
          alt="Exhibition"
          className="m-auto rounded aspect-video object-contain"
        />
      </div>
      <h4 className="font-medium text-lg mt-2">{exhibition.title}</h4>
      <div className="text-sm *:flex *:flex-wrap *:gap-2 *:my-1">
        <div>
          <MapPin size={15} className="my-1" />
          <span className="flex-1">{exhibition.venue}</span>
        </div>

        <div>
          <CalendarDays size={15} className="my-1" />
          <span className="flex-1">
            {new Date(exhibition.start_date).toLocaleDateString("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            -{" "}
            {new Date(exhibition.end_date).toLocaleDateString("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ExhibitionCard;
