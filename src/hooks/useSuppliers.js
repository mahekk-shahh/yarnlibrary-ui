import url from "@/components/url";
import api from "@/helper/helper";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const getSuppliers = async () => {
  const response = await api.get(`${url}/suppliers`);
  return response.data;
};

const getSupplierById = async (id) => {
  const { data } = await api.get(`${url}/suppliers/${id}`);
  return data.data;
};

export const useSuppliers = () => {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: getSuppliers,
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });
};

export const useSupplierById = (id) => {
  return useQuery({
    queryKey: ["suppliers", id],
    queryFn: () => getSupplierById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
};
