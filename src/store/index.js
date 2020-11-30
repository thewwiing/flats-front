import {
    applyMiddleware,
    createStore,
    compose
} from 'redux';

import rootReducer from './reducers';
import {logger}    from "redux-logger";
import thunk from 'redux-thunk';

const middleware = [thunk, logger];


export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);
