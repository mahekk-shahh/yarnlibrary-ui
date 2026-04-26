import { Skeleton } from "@/components/Skeleton";

export const ExhibitionDetailSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8 animate-pulse">
      {/* Header */}
      <div className="text-center space-y-2">
        <Skeleton className="h-8 w-1/2 mx-auto" />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Description */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 space-y-4">
          {/* Paragraph lines */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/6" />

          {/* Info Box */}
          <div className="px-4 py-3 bg-slate-100 rounded-lg shadow w-fit text-sm space-y-2 mt-4">
            <Skeleton className="h-5 w-24" />

            {/* Date */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-40" />
            </div>

            {/* Venue */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>

        {/* Image & Tags */}
        <div className="space-y-4">
          {/* Image */}
          <Skeleton className="w-full h-56 rounded-xl" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
