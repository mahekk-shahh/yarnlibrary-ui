import { ProductsCard } from "@/components/products/ProductsCard";
import { ProductsCardPreview } from "@/components/products/ProductsCardPreview";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useProducts } from "@/hooks/useProducts";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link, } from "react-router-dom";
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";

const ProductsSection = () => {
  const { data, isPending, isError, isSuccess } = useProducts();
  return (
    <div className="p-5 mt-5">
      <h2 className="font-semibold text-3xl text-center mb-4">
        Handpicked for You
      </h2>
      <div>
        {isError ? (
          <div>
            <ProductsCardPreview />
          </div>
        ) : (
          <ScrollArea className="w-full rounded-md">
            <div className="flex gap-6 py-1">
              {isPending ? (
                <ProductCardSkeleton />
              ) : (
                data?.map((item, i) => (
                  <ProductsCard key={i} products={item} className="w-70" />
                ))
              )}
            </div>
            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>
        )}
      </div>
      {isSuccess && (
        <div className="text-right">
          <Link to="/listing">
            <Button>
              View All <ArrowRight />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
