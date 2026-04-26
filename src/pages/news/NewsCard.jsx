import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div key={news.id} className="flex gap-4">
      <img
        src={news.imageUrl}
        className="rounded-xl mb-2 h-28 w-28 border"
      />
      <div className="flex justify-evenly items-start flex-col">
        <h3 className="font-medium text-sm line-clamp-2">{news.title}</h3>
        <Button
          onClick={() => navigate(`/news/${news.id}`)}
          variant="outline"
          className="text-xs h-auto p-1.5"
        >
          View More <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
