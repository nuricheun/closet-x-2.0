import {instance} from "./axiosinstance";

export const fetchAllItems = () => {
  return instance.get("/api/items");
};

export const fetchItem = id => {
  return instance.get(`/api/items/${id}`);
};

export const createItem = data => {
  return instance.post("/api/items", data);
};

export const updateItem = (data, id) => {
  return instance.post(`/api/items/update/${id}`, data);
};

export const removeItem = data => {
  return instance.get(`/api/items/${data.id}`);
};
