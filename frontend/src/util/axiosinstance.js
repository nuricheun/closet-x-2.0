import axios from "axios";

export const instance = axios.create({
  baseURL: "/",
});

instance.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  if (accessToken && accessToken !== "") {
    req.headers.Authorization = "Bearer " + accessToken;
  }
  if (refreshToken && refreshToken !== "") {
    req.headers.refreshToken = "Bearer " + refreshToken;
  }
  return req;
});
