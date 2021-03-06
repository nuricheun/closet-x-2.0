import {applyMiddleware, createStore} from "redux"
import {rootReducer} from '../reducer/rootReducer';
import thunk from "redux-thunk"
import logger from "redux-logger"


const configureStore = (preloadedState = {}) => {
    let middleware = [thunk]
    if(process.env.NODE_ENV !== 'production'){
        middleware = [...middleware, logger];
    }
    return createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
}

export default configureStore