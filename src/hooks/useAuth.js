import url from "@/components/url";
import api from "@/helper/helper";
import { useQuery } from "@tanstack/react-query";

// Get auth state from localStorage
const getAuth = async () => {
  const res = await api.get(`${url}/auth/access`, {withCredentials: true})
  localStorage.setItem("token", res.data.access)
  return res.data
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getAuth,
    staleTime: Infinity,
  });
};
