import api from "@/helper/helper";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import url from "@/components/url";

const getProducts = async (filters) => {
  const res = await api.get(`${url}/products`, {
    params: filters,
  });
  return res.data;
};

const getProductsById = async (id) => {
  const response = await api.get(`${url}/products/${id}`);
  return response.data.data;
};

export const useProducts = (filters) => {
  return useQuery({
    queryKey: ["products", filters || {}],
    queryFn: () => getProducts(filters),
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
