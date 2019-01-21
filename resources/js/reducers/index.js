import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import errors from './errors';
import tweets from './tweets';
import user from './user';

import { RESET_APP } from '../actions/app';

const rootReducer = (history) => (state, action) => {

    if(action.type === RESET_APP) {
        const { user } = state;
        state = { user };
    }

    const appReducer = combineReducers({
        form: formReducer,
        router: connectRouter(history),
        tweets,
        errors,
        user,
    });

    return appReducer(state, action);
};

export default rootReducer;