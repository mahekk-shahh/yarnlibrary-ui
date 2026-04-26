import { ProductsCard } from "@/components/products/ProductsCard";
import { useProducts } from "@/hooks/useProducts";
import Filters from "@/components/Filters";
import { useForm } from "react-hook-form";
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton";

const ListingYarn = () => {
  const form = useForm({ defaultValues: {} });
  const { watch } = form;

  const values = watch();
  const { data: products, isPending: isProductsPending } = useProducts(values);

  if (isProductsPending) return <ProductCardSkeleton cards={5} />;

  return (
    <div className="mx-2">
      <div className="flex items-start flex-wrap">
        {/* <Filters form={form} facets={products.facet} /> */}
        <div className="flex-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.products?.map((product) => (
            <ProductsCard
              products={product}
              key={product.id}
              className="w-full m-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingYarn;
