import {TOGGLE_ITEM_MODAL ,TOGGLE_NEW_MODAL} from '../action/modalAction';


const initialState = {
    itemModal : false,
    newModal : false
}

export const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_NEW_MODAL:
            return {
                ...state,
                itemModal: !state['itemModal']
            }
        case TOGGLE_ITEM_MODAL:
            return {
                ...state,
                newModal: !state['newModal']
            }            
        default:
            return state
    }
}