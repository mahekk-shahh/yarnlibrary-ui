import SuppliersCard from "@/components/suppliers/SuppliersCard";
import Filters from "@/components/Filters";
import { useForm } from "react-hook-form";
import { SupplierCardSkeleton } from "@/components/suppliers/SupplierCardSkeleton";
import { useSuppliers } from "@/hooks/useSuppliers";

const ListingCompany = () => {
  const form = useForm({ defaultValues: { location: [] } });

  const { data: suppliers, isPending } = useSuppliers();

  if (isPending) return <SupplierCardSkeleton />;

  return (
    <div className="mb-5">
      <div className="mx-2">
        <div className="flex items-start flex-wrap">
          {/* <div className="flex-1">
            <Filters facets={suppliers.facets} form={form} />
          </div> */}
          <div className="flex-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4">
            {suppliers.data?.map((supplier) => (
              <SuppliersCard supplier={supplier} key={supplier.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCompany;
