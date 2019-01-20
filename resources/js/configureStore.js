import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import history from './createHistory';

import createRootReducer from './reducers';

import clearError from './middleware/clearError';

export default function configureStore(initialState = {}) {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [
        routerMiddleware(history),
        clearError,
        thunk
    ];

    let composeEnhancers = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            // const nextReducer = require('./reducers/index').default;
            store.replaceReducer(createRootReducer(history));
        });
    }

    return store;
}