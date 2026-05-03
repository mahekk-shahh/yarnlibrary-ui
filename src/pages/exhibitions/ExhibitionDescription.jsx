import { Badge } from "@/components/ui/badge";
import url from "@/components/url";
import { CalendarDays, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { ExhibitionDetailSkeleton } from "./ExhibitionDetailSkeleton";
import { useExhibitionById } from "@/hooks/useExhibitions";

export default function ExhibitionDescription() {
  const { id } = useParams();

  const { data: exhibition, isPending: isExhibitionPending } = useExhibitionById(id)

  if (isExhibitionPending) return <ExhibitionDetailSkeleton />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">{exhibition.title}</h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Description */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <div
            dangerouslySetInnerHTML={{ __html: exhibition.description }}
            className="prose prose-sm md:prose lg:prose-lg text-gray-700 leading-relaxed max-w-none"
          />
          {/* Info Box */}
          <div className="px-4 py-3 bg-slate-100 rounded-lg shadow w-fit text-sm space-y-1 mt-4">
            <h5 className="text-md font-medium">Details</h5>
            <div className="flex items-center gap-2">
              <CalendarDays size={17} />
              <p>
                {new Date(exhibition.start_date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}{" "}
                to{" "}
                {new Date(exhibition.end_date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={17} />
              <p>{exhibition.venue}</p>
            </div>
          </div>
        </div>

        {/* Image & Tags */}
        <div className="space-y-4">
          <img
            src={
              exhibition.image_url ? exhibition.image_url : "/placeholder.png"
            }
            alt={exhibition.title}
            className="w-full rounded-xl shadow-md object-cover"
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {exhibition.tags?.length > 0 ? (
              exhibition.tags.map((tag, i) => (
                <Badge
                  key={i}
                  className="capitalize px-3 py-1 text-sm rounded-full shadow-sm"
                >
                  #{tag}
                </Badge>
              ))
            ) : (
              <p className="text-xs text-gray-400 italic">No tags available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
