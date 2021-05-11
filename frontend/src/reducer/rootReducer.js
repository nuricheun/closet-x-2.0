import { combineReducers } from "redux"
import {sessionReducer} from './sessionReducer'
import {entities} from './entityReducer'
import {errorReducer} from './errorReducer';

export const rootReducer = combineReducers({
    session: sessionReducer,
    entities,
    error: errorReducer
})

