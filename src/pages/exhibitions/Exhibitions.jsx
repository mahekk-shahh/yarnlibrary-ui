import ExhibitionCard from "./ExhibitionCard";
import { useExhibitions } from "@/hooks/useExhibitions";
import { ExhibitionCardSkeleton } from "./ExhibitionCardSkeleton";

const Exhibitions = () => {
  const { data: exhibitions, isPending: isExhibitionsPending } = useExhibitions()

  if (isExhibitionsPending) {
    return <ExhibitionCardSkeleton />;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mt-1">Latest Exhibitions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-3">
        {exhibitions?.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
