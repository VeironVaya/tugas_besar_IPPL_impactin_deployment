import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// otomatis sisipkan token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    const isAuthEndpoint =
      config.url.includes("/user/login") ||
      config.url.includes("/user/register");

    if (token && !isAuthEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// optional: handle response error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);


export default api;
