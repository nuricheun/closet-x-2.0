import * as OutfitAPIUtil from '../util/outfitApiUtil';
import { receiveItemErrors } from "./itemAction";

export const RECEIVE_ALL_OUTFITS = "RECEIVE_ALL_OUTFITS";
export const RECEIVE_OUTFIT = "RECEIVE_OUTFIT";
export const REMOVE_OUTFIT = "REMOVE_OUTFIT";
export const RECEIVE_OUTFIT_ERRORS = "RECEIVE_OUTFIT_ERRORS";
export const CREATE_OUTFIT = "CREATE_OUTFIT";

export const receiveAllOutfits = outfits => ({
  type: RECEIVE_ALL_OUTFITS,
  outfits
});

export const receiveOutfit = outfit => ({
  type: RECEIVE_OUTFIT,
  outfit
});

export const removeOutfit = outfit => ({
  type: REMOVE_OUTFIT,
  outfitId: outfit.id
});

export const receiveOutfitErrors = errors => ({
  type: RECEIVE_OUTFIT_ERRORS,
  errors
});

export const fetchAllOutfits = () => dispatch =>
  OutfitAPIUtil.fetchAllOutfits()
  .then(res => dispatch(receiveAllOutfits(res.data)))
  // .catch(err => dispatch(receiveItemErrors(err.responseJSON)))
  

export const fetchOutfit = id => dispatch =>
  OutfitAPIUtil.fetchOutfit(id)
  .then(res => dispatch(receiveOutfit(res.data)))
  .catch(err => console.log(err))

export const createOutfit = outfit => dispatch =>
  OutfitAPIUtil.createOutfit(outfit)
    .then(res => dispatch(receiveOutfit(res.data)))
    // .catch(err => dispatch(receiveOutfitErrors(err.responseJSON)));
