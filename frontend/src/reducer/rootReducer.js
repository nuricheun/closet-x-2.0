import { combineReducers } from "redux"
import {sessionReducer} from './sessionReducer'
import {entities} from './entityReducer'

const RootReducer = combineReducers({
    session: sessionReducer,
    entities
})

export default RootReducer