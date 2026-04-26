import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import url from "@/components/url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export function ProductsCard({ products, className, hideLink = false }) {
  if (!products || !products.imageUrl || products.imageUrl.length === 0)
    return null;

  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  // Sync selected index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Thumbnail click
  const scrollTo = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={`max-w-70 mb-5 ${className}`}>
      <Card className="rounded-xl overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300 p-0">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={products.imageUrl[0]}
              className="cursor-zoom-in w-full rounded"
              alt="product"
            />
          </DialogTrigger>

          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogTitle>Images Preview</DialogTitle>
            <div className="flex gap-4">
              {/* THUMBNAILS */}
              <div className="space-y-2 max-h-[50vh] overflow-y-auto">
                {products.imageUrl.map((img, index) => (
                  <img
                    key={index}
                    onClick={() => scrollTo(index)}
                    src={img}
                    className={`w-16 h-16 rounded cursor-pointer border ${
                      selectedIndex === index
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              {/* CAROUSEL */}
              <div className="overflow-hidden flex-1" ref={emblaRef}>
                <div className="flex">
                  {/* {products.images.map((img, index) => ( */}
                  <div className=" flex justify-center">
                    <img
                      src={products.imageUrl[selectedIndex]}
                      className="max-h-[500px] object-contain rounded"
                      alt={products.name}
                    />
                  </div>
                  {/* ))} */}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <CardContent className="p-5">
          <div className="flex justify-between items-center">
            <h5 className="font-medium text-md">
              Supplier: {products.supplier?.name}
            </h5>
            {!hideLink && <Button
              size="xs"
              variant="ghost"
              onClick={() =>
                navigate(`/listing/company/${products.supplier_id}`)
              }
            >
              <ExternalLink />
            </Button>}
          </div>
          <p className="text-sm">Product Type: {products.name}</p>
          <p className="text-sm">Quality: {products.quality}</p>
          <p className="text-sm">Count/Denier: {products.count}</p>
          <p className="text-sm">Blend: {products.blend}</p>
          <p className="text-sm">Type of Dye: {products.shade}</p>
        </CardContent>
      </Card>
    </div>
  );
}
