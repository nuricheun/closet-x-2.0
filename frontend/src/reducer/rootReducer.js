import { combineReducers } from "redux"
import {sessionReducer} from './sessionReducer'
import {entities} from './entityReducer'

export const rootReducer = combineReducers({
    session: sessionReducer,
    entities
})

