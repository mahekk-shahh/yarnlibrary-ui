import url from "@/components/url";
import api from "@/helper/helper";
import { useQuery } from "@tanstack/react-query";

const verifyToken = async () => {
  const response = await api.post(`${url}/verify`);
  return response.data;
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: verifyToken,
    retry: false,
    staleTime: Infinity,
  });
};
