import {
  RECEIVE_ALL_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
} from "../action/itemAction";
import merge from "lodash/merge";

export const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      return action.items.data;
    case RECEIVE_ITEM:
      return merge({}, state, { [action.item._id]: action.item });
    case REMOVE_ITEM:
      newState = merge({}, state);
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

