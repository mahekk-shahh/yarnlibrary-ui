import NewsCard from "@/pages/news/NewsCard";
import { useNews } from "@/hooks/useNews";
import NewsCardSkeleton from "./NewsCardSkeleton";

const News = () => {
  const { data: news, isPending: isNewsPending } = useNews();

  if (isNewsPending) return <NewsCardSkeleton className="p-5" />;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold">News</h1>
      <div className="grid grid-cols-4 gap-4 my-3">
        {news.map((n) => (
          <NewsCard news={n} />
        ))}
      </div>
    </div>
  );
};

export default News;
