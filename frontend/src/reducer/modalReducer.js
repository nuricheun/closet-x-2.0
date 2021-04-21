import {TOGGLE_ITEM_MODAL ,TOGGLE_NEW_MODAL, TOGGLE_SIGNUP_MODAL, TOGGLE_SIGNIN_MODAL} from '../action/modalAction';
import merge from 'lodash/merge'

const initialState = {
    itemModal : false,
    newModal : false,
    signinModal: false,
    signupModal: false
}

export const modalReducer = (state=initialState, action) => {
    Object.freeze(state);
    let newState;
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
        case TOGGLE_SIGNIN_MODAL:
            console.log("toggle signin")
            newState = merge({}, state, {["signinModal"]: !state["signinModal"]})
            return newState
        case TOGGLE_SIGNUP_MODAL:
            console.log("toggle signup")
            return {
                ...state,
                signupModal: !state['signupModal']
            }
        default:
            return state
    }
}