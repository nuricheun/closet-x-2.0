import {HIDE_MODAL, SHOW_MODAL} from '../action/modalAction';

const initialState = {
    currentModal: null
}

export const modalReducer = (state=initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SHOW_MODAL:
            return {currentModal: action.modal}
        case HIDE_MODAL:
            return {currentModal: null}
        default:
            return state
    }
}