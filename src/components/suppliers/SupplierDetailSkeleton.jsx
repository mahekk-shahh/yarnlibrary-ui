import { Skeleton } from "../Skeleton";

export const SupplierDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-0 animate-pulse">
      {/* Left Content */}
      <div className="flex-1">
        {/* Company Name */}
        <div className="flex items-center my-3">
          <Skeleton className="h-8 w-2/3" />
        </div>

        {/* Address */}
        <div className="flex gap-2 my-3 items-center">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Name */}
        <div className="flex gap-2 my-3 items-center">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-1/3" />
        </div>

        {/* Email */}
        <div className="flex gap-2 my-3 items-center">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Phone */}
        <div className="flex gap-2 my-3 items-center">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>

      {/* Right Image */}
      <Skeleton className="w-full aspect-video rounded" />
    </div>
  );
};
