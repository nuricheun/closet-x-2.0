import axios from "axios";

export const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken && accessToken !== "") {
    request.headers.Authorization = "Bearer " + accessToken;
  }
  return request;
});


instance.interceptors.response.use(
  response => {
    return response;
  },  
  async (error) => {
    const originalRequest = error.config;
    let refreshToken = localStorage.getItem("refresh_token");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return instance
        .post(`api/users/refresh`, { refreshToken: refreshToken })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.access_token);
            return instance(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);