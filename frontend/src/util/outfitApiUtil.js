import { instance } from "./axiosinstance";

export const fetchAllOutfits = () => {
  return instance.get("/api/outfits");
};

export const fetchOutfit = id => {
  return instance.get(`/api/outfit/${id}`);
};

export const createOutfit = data => {
  return instance.post("/api/outfits", data);
};

export const removeItem = data => {
  return instance.get(`/api/outfits/${data.id}`);
};
