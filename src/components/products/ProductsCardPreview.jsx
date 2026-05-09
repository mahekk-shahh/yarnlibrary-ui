import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

export function ProductsCardPreview({ cards = 3 }) {
  return (
    <div className="relative w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mx-auto mb-5 gap-3 backdrop-blur-sm p-4">
      {Array.from({ length: cards }, (_, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden bg-white border border-gray-200"
        >
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-t-2xl">
            <img src={"./images/bg-home-3.jpg"} alt="" />
          </div>

          <Button className="w-full rounded-none rounded-b-2xl pointer-events-none">
            Know More
          </Button>
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl">
        <div className="text-center bg-white/75 px-10 py-6 rounded-xl border-[1.5px] border-blue-800 text-blue-900">
          <p className="text-lg font-semibold mb-3">Login to continue</p>

          <Link to="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
