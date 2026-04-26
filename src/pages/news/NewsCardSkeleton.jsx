const NewsCardSkeleton = ({ cards = 3, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: cards }).map((_, i) => (
        <div className="flex gap-4 animate-pulse" key={i}>
          {/* Image Skeleton */}
          <div className="size-30 rounded-lg bg-gray-200 border"></div>

          {/* Content Skeleton */}
          <div className="flex flex-col justify-evenly w-full">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Button Skeleton */}
            <div className="h-7 w-24 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsCardSkeleton
