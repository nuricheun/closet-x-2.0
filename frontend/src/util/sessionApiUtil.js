import axios from "axios";

export const setAuthToken = async token => {
  if (token) {
    return axios.defaults.headers.common["Authorization"] = token;
  } else {
    return delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
  return axios.post('/api/users/login', userData);
};