import { Mail, MapPin, Phone, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { ProductsCard } from "../products/ProductsCard";
import { ProductCardSkeleton } from "../products/ProductCardSkeleton";
import { SupplierDetailSkeleton } from "./SupplierDetailSkeleton";
import { useProductById } from "@/hooks/useProducts";
import { useSupplierById } from "@/hooks/useSuppliers";

const SupplierDetails = () => {
  const { id } = useParams();

  const {
    data: supplierDetail,
    isPending: isDetailsPending,
    error: supplierError,
    isError: isSupplierError,
  } = useSupplierById(id)

  const {
    data: products,
    isPending,
    error,
  } = useProductById(id);

  if(isDetailsPending || isPending) return (
    <div>
      <SupplierDetailSkeleton />
      <ProductCardSkeleton cards={4} />
    </div>
  );
  if (error) return <div>Error: {error.message}</div>;
  if (isSupplierError)
    return (
      <div>
        Error: {supplierError.response?.data?.message ?? "Something went wrong"}
      </div>
    );

  return (
    <div className="m-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-0">
        <div className="flex-1">
          <div className="flex items-center my-3">
            <p className="text-3xl font-semibold">
              {supplierDetail?.company ?? ""}
            </p>
          </div>
          <div className="flex gap-2 my-3 items-center">
            <MapPin size={18} />
            <p>{supplierDetail?.address || "Mumbai"}</p>
          </div>
          <div className="flex gap-2 my-3 items-center">
            <User size={18} />
            <p>{supplierDetail.name}</p>
          </div>
          <div className="flex gap-2 my-3 items-center">
            <Mail size={18} />
            <p>{supplierDetail.email}</p>
          </div>
          <div className="flex gap-2 my-3 items-center">
            <Phone size={18} />
            <p>{supplierDetail.phone_number}</p>
          </div>
        </div>
        <img
          src={supplierDetail.logoUrl}
          alt={supplierDetail.companyName}
          className="rounded aspect-video object-contain"
        />
      </div>
      {products.length > 0 && (
        <div className="my-5">
          <h1 className="text-2xl font-semibold mb-2">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductsCard products={product} key={product.id} hideLink={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierDetails;
