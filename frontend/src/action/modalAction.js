export const TOGGLE_ITEM_FORM_MODAL = 'TOGGLE_ITEM_FORM_MODAL';
export const TOGGLE_NEW_ITEM_FORM_MODAL = 'TOGGLE_NEW_ITEM_FORM_MODAL';
export const TOGGLE_SIGNIN_MODAL = 'TOGGLE_SIGNIN_MODAL';
export const TOGGLE_SIGNUP_MODAL = 'TOGGLE_SIGNUP_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export const toggleItemFormModal = () => ({
    type: TOGGLE_ITEM_FORM_MODAL 
})

export const toggleNewFormModal = () => ({
    type: TOGGLE_NEW_ITEM_FORM_MODAL
})

export const toggleSigninModal = () => ({
    type: TOGGLE_SIGNIN_MODAL
})

export const toggleSignupModal = () => ({
    type: TOGGLE_SIGNUP_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const showModal = (modal) => ({
    type: SHOW_MODAL,
    modal
})