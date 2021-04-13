import {applyMiddleware, createStore} from "redux"
import rootReducer from '../reducer/root_reducer';
// import thunk from "react-thunk"
import logger from "redux-logger"


const configureStore = (preloadedState = {}) => {
    // let middleware = [thunk]
    // if(process.env.NODE_ENV !== 'production'){
    //     middleware = [...middleware, logger];
    // }
    return createStore(rootReducer, preloadedState)
}

export default configureStore