import { Skeleton } from "@/components/Skeleton";
import { Card } from "@/components/ui/card";

export const ExhibitionCardSkeleton = ({length = 4}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5">
      {Array.from({ length }).map((_, i) => (
        <Card className="p-3 animate-pulse" key={i}>
          {/* Image */}
          <div className="text-center">
            <Skeleton className="m-auto rounded aspect-video w-full" />
          </div>

          {/* Title */}
          <Skeleton className="h-7 w-3/4 mt-3" />

          {/* Details */}
          <div className="text-sm space-y-2 mt-2">
            {/* Venue */}
            <div className="flex items-start gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Dates */}
            <div className="flex items-start gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
