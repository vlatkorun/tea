import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import errors from './errors';
import tweets from './tweets';

const rootReducer = (history) => combineReducers({
    form: formReducer,
    router: connectRouter(history),
    tweets,
    errors,
});

export default rootReducer;