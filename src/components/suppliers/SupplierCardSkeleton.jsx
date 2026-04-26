import { Skeleton } from "../Skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const SupplierCardSkeleton = ({ cards = 4 }) => {
  return (
    <div className="flex-3 grid grid-cols-1 md:grid-cols-4 gap-4 mx-4">
      {Array.from({ length: cards }).map((_, i) => (
        <Card className="animate-pulse" key={i}>
          <CardContent className="text-center space-y-3">
            {/* Image */}
            <Skeleton className="w-full h-40 rounded" />

            {/* Title */}
            <Skeleton className="h-5 w-3/4 mx-auto" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
