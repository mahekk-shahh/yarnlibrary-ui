import api from "@/helper/helper";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import url from "@/components/url";

const getProducts = async () => {
  const res = await api.get(`${url}/api/products`, {
    // params: filters,
  });
  return res.data;
};

const getProductsById = async (id) => {
  const response = await api.get(`${url}/api/products/?supplier_id=${id}`);
  return response.data;
};

export const useProducts = (filters) => {
  return useQuery({
    queryKey: ["products", filters || {}],
    queryFn: () => getProducts(),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
}
