import url from "@/components/url";
import api from "@/helper/helper";
import { useQuery } from "@tanstack/react-query";

const getNews = async () => {
  const res = await api.get(`${url}/api/news`);
  return res.data;
};

const getNewsById = async (id) => {
  const response = await api.get(`${url}/api/news/${id}`);
  return response.data;
};

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: getNews,
    staleTime: Infinity,
  });
};

export const useNewsById = (id) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
    enabled: !!id,
    staleTime: Infinity,
  });
}
