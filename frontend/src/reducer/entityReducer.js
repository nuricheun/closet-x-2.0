import {combineReducers} from 'redux'
import {itemReducer} from './itemReducer'
import {outfitReducer} from './outfitReducer'
import {modalReducer} from './modalReducer';

export const entities = combineReducers({
    items: itemReducer,
    outfits: outfitReducer,
    modal: modalReducer
})