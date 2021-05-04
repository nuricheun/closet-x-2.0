import {RECEIVE_OUTFIT_ERRORS} from '../action/outfitAction';
import {RECEIVE_ITEM_ERRORS} from '../action/itemAction';
import {RECEIVE_SESSION_ERRORS} from '../action/sessionAction';

export const errorReducer = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_OUTFIT_ERRORS:
            return action.error
        case RECEIVE_ITEM_ERRORS:
            return action.error
        case RECEIVE_SESSION_ERRORS:
            return action.error
        default:
            return state
    }
}