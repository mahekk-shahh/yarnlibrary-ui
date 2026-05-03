import url from "@/components/url";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: url,
});

// Add token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiry and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired, try to refresh it
    if (
      error.response?.status === 419 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${API_URL}/refresh`, {}, {
          withCredentials: true,
        });
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        // localStorage.removeItem("token");
        // window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    // Handle other errors
    if (error.response?.status === 401) {
      // toast.error("Unauthorized. Please log in again.");
      // window.location.href = "/login"
    } else if (error.response?.status === 440) {
      // toast.error(error.response.data.message || "Session error");
      // window.location.href = "/login";

    }

    return Promise.reject(error);
  }
);

export default api;
