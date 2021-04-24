import {TOGGLE_ITEM_FORM_MODAL ,TOGGLE_NEW_ITEM_FORM_MODAL, TOGGLE_SIGNUP_MODAL, TOGGLE_SIGNIN_MODAL} from '../action/modalAction';
import merge from 'lodash/merge'

const initialState = {
    itemFormModal : false,
    newItemFormModal : false,
    signinModal: false,
    signupModal: false
}

export const modalReducer = (state=initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case TOGGLE_ITEM_FORM_MODAL:
            newState = merge({}, state, {["itemFormModal"]: !state["itemFormModal"]})
            return newState
        case TOGGLE_NEW_ITEM_FORM_MODAL:
            newState = merge({}, state, {["newItemFormModal"]: !state["newItemFormModal"]})
            return newState
        case TOGGLE_SIGNIN_MODAL:
            newState = merge({}, state, {["signinModal"]: !state["signinModal"]})
            return newState
        case TOGGLE_SIGNUP_MODAL:
            newState = merge({}, state, {["signupModal"]: !state["signupModal"]})
            return newState
        default:
            return state
    }
}