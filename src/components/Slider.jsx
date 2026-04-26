import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import url from "./url";

export function Slider({ products }) {
  console.log(products);
  if (!products || !products.images || products.images.length === 0) return;
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="w-full max-w-sm mx-auto mb-5">
      {/* Card Wrapper */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300 relative">
        {/* Carousel stays on top */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-t-2xl">
          <Carousel className="relative bg-indigo-50/40">
            <CarouselContent>
              {products.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger className="w-full h-full">
                        <img
                          src={
                            item
                              ? url + item
                              : "https://dummyimage.com/400x300/ddd/000000&text=No+Image"
                          }
                          className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-500 hover:brightness-95 cursor-zoom-in"
                        />
                      </DialogTrigger>

                      <DialogContent className="max-w-[90vw] max-h-[95vh] w-full h-full rounded-xl bg-white">
                        <DialogTitle>Image</DialogTitle>
                        <img
                          src={
                            item
                              ? url + item
                              : "https://dummyimage.com/600x400/ddd/000000&text=No+Image"
                          }
                          className="m-auto h-auto max-h-[80vh] object-contain rounded-xl"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow rounded-full hover:scale-105" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow rounded-full hover:scale-105" />
          </Carousel>
        </div>

        {/* Animated Details Panel */}
        <div
          className={`overflow-hidden transition-all duration-700 linear ${
            showDetails ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-indigo-50/40 px-4 py-3 text-sm">
            <h3 className="font-semibold text-lg mb-2">Product Details</h3>
            <div className="text-gray-700">
              <div className="flex flex-wrap my-2 gap-2">
                <p className="font-semibold">Product Type:</p>
                <p className="text-sm">{products.product_type}</p>
              </div>
              <div className="flex flex-wrap my-2 gap-2">
                <p className="font-semibold">Quality:</p>
                <p className="text-sm">{products.quality}</p>
              </div>
              <div className="flex flex-wrap my-2 gap-2">
                <p className="font-semibold">Count:</p>
                <p className="text-sm">{products.count}</p>
              </div>
              <div className="flex flex-wrap my-2 gap-2">
                <p className="font-semibold">Blend:</p>
                <p className="text-sm">{products.blend}</p>
              </div>
              <div className="flex flex-wrap my-2 gap-2">
                <p className="font-semibold">Type of Dye:</p>
                <p className="text-sm">{products.type_of_dye}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          className="w-full rounded-none rounded-b-2xl py-4 font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          {showDetails ? "Hide Details" : "Know More"}
        </Button>
      </div>
    </div>
  );
}
