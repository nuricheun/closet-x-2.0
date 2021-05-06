import {instance} from "./axiosinstance";

export const fetchAllItems = () => {
  return instance.get("/items");
};

export const fetchItem = id => {
  return instance.get(`/items/${id}`);
};

export const createItem = data => {
  return instance.post("/items/add", data);
};

export const updateItem = (data, id) => {
  return instance.post(`/items/update/${id}`, data);
};

export const removeItem = data => {
  return instance.get(`/items/${data.id}`);
};
