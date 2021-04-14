import {combineReducers} from 'redux'
import {itemReducer} from './itemReducer'
import {outfitReducer} from './outfitReducer'

export const entities = combineReducers({
    items: itemReducer,
    outfits: outfitReducer
})