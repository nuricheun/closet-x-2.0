import {
  RECEIVE_ALL_OUTFITS,
  RECEIVE_OUTFIT,
  REMOVE_OUTFIT
} from "../action/outfitAction";
import merge from "lodash/merge";

export const outfitReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_OUTFITS:
      return action.outfits;
    case RECEIVE_OUTFIT:
      return action.outfit;
    case REMOVE_OUTFIT:
      newState = merge({}, state);
      delete newState[action.outfitId];
      return newState;
    default:
      return state;
  }
};


