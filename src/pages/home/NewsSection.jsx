import { NewsCardPreview } from "@/pages/news/NewsCardPreview";
import { Button } from "@/components/ui/button";
import { useNews } from "@/hooks/useNews";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import NewsCardSkeleton from "../news/NewsCardSkeleton";
import NewsCard from "../news/NewsCard";

const NewsSection = () => {
  const navigate = useNavigate();
  const { data, isPending, isError, isSuccess } = useNews();
  return (
    <section className="w-full mx-auto p-5">
      <h2 className="font-semibold text-3xl mb-4 text-center">Latest News</h2>

      {isError ? (
        <NewsCardPreview />
      ) : isPending ? (
        <NewsCardSkeleton />
      ) : (
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {data?.slice(0, 6).map((news) => (
            <NewsCard news={news} />
          ))}
        </div>
      )}
      {isSuccess && (
        <div className="text-right">
          <Link to="/news">
            <Button>
              Explore More <ArrowRight />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
