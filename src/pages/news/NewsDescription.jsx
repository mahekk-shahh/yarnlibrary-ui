import { Skeleton } from "@/components/Skeleton";
import { Badge } from "@/components/ui/badge";
import url from "@/components/url";
import { useNewsById } from "@/hooks/useNews";
import { useParams } from "react-router-dom";

export default function NewsDescription() {
  const { id } = useParams();

  const { data: news, isPending: isNewsPending } = useNewsById(id);

  if (isNewsPending) return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-3/4" />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Right Sidebar */}
        <div className="space-y-3">
          {/* Image */}
          <Skeleton className="w-full h-48 rounded-lg" />

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

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{news.title}</h1>
        <p className="text-sm text-gray-500">{news.date}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <div
            dangerouslySetInnerHTML={{ __html: news.description }}
            className="text-justify *:my-4 *:leading-5"
          />
        </div>
        <div>
          <img
            src={news.imageUrl || "/placeholder.png"}
            alt={news.title}
            className="w-full rounded-lg"
          />
          <div className="my-1.5">
            {news.tags?.map((h, i) => (
              <Badge key={i} className="capitalize mr-2">
                #{h}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
