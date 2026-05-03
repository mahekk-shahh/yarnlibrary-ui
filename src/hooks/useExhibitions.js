import url from "@/components/url";
import { useQuery } from "@tanstack/react-query";
import api from "@/helper/helper"

const fetchExhibitions = async () => {
  const response = await api.get(`${url}/api/exhibitions`);
  return response.data;
};

const fetchExhibitionsById = async (id) => {
  const response = await api.get(`${url}/api/exhibitions/${id}`);
  return response.data;
};

export const useExhibitions = () => {
  return useQuery({
    queryKey: ["exhibitions"],
    queryFn: fetchExhibitions,
    staleTime: Infinity,
  });
};

export const useExhibitionById = (id) => {
  return useQuery({
    queryKey: ["exhibitions", id],
    queryFn: () => fetchExhibitionsById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
}