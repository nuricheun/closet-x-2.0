import { instance } from "./axiosinstance";

export const fetchAllOutfits = () => {
  return instance.get("/outfits");
};

export const fetchOutfit = id => {
  return instance.get(`/outfit/${id}`);
};

export const createOutfit = data => {
  return instance.post("/outfits", data);
};

export const removeItem = data => {
  return instance.get(`/outfits/${data.id}`);
};
