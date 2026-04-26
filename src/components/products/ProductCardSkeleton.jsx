import { Skeleton } from "../Skeleton";

export function ProductCardSkeleton({cards = 5}) {
  return (
    <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {Array.from({ length: cards }, (_, i) => (
        <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm animate-pulse" key={i}>
          {/* Image Skeleton */}
          <Skeleton className="w-full h-40 bg-gray-200 rounded-t-2xl" />

          {/* Dots / carousel indicators */}
          <div className="flex justify-center gap-2 py-3">
            <Skeleton className="w-2 h-2 bg-gray-300 rounded-full" />
            <Skeleton className="w-2 h-2 bg-gray-300 rounded-full" />
            <Skeleton className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>

          {/* Text skeleton */}
          <div className="px-4 pb-4 space-y-3">
            <Skeleton className="h-6 bg-gray-200 rounded w-3/4" />
            <Skeleton className="h-4 bg-gray-200 rounded w-1/2" />
            <Skeleton className="h-4 bg-gray-200 rounded w-2/3" />
          </div>

          {/* Button Skeleton */}
          <Skeleton className="h-10 bg-gray-200 rounded-b-2xl" />
        </div>
      ))}
    </div>
  );
}
