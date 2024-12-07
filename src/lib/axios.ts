import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = (access_token: string | null | undefined) => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: access_token ? `Bearer ${access_token}` : undefined,
    },
    withCredentials: true,
  });

  // Add a response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refresh_token = localStorage.getItem("refresh-token");

        if (refresh_token) {
          try {
            const refreshResponse = await axios.post(
              `${API_URL}/user/refresh`,
              { refresh_token },
              {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              }
            );

            const newAccessToken = refreshResponse.data.access_token;
            localStorage.setItem("access-token", newAccessToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return instance(originalRequest);
          } catch (refreshError) {
            console.error("Token refresh failed", refreshError);
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            return Promise.reject(refreshError);
          }
        } else {
          console.warn("No refresh token available");
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
  return instance;
};

export const apiPayload = () => {
  const access_token = localStorage.getItem("access-token");
  return api(access_token);
};
