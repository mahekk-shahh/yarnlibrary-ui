import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"

export function NewsCardPreview() {
  return (
    <div className="relative w-full flex flex-wrap mx-auto mb-5 gap-3 p-4">
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="flex flex-wrap gap-4 border border-blue-900">
          <img src={'./images/news-cover.png'} className="rounded-xl mb-2 h-28 w-28 border" />
          <div className="flex justify-evenly items-start flex-col">
            <h3 className="font-medium text-sm line-clamp-2">News Title</h3>
            <Button variant="outline" className="text-xs h-auto p-1.5">
              View More <ArrowRight size={15} />
            </Button>
          </div>
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl">
        <div className="text-center bg-white/75 px-10 py-6 rounded-xl border-[1.5px] border-blue-800 text-blue-900">
          <p className="text-lg font-semibold mb-3">Login to continue</p>

          <Link to="/login"><Button>Login</Button></Link>
        </div>
      </div>
    </div>
  );
}
