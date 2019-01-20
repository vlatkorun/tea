import update from 'immutability-helper';

import {
    SET_ERROR,
    CLEAR_ERROR,
    SET_API_ERROR,
    CLEAR_API_ERROR,
} from '../actions/errors';

const initialState = {
    error: false,
    message: null,
    httpStatus: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_API_ERROR:
            return update(state, {
                error: {$set: true},
                message: {$set: action.payload.message},
                httpStatus: {$set: action.payload.httpStatus || null},
            });
        case CLEAR_API_ERROR:
            return update(state, {
                error: {$set: false},
                message: {$set: null},
                httpStatus: {$set: null},
            });
        case CLEAR_ERROR:
            return update(state, {
                error: {$set: false},
                message: {$set: null},
                httpStatus: {$set: null},
            });
        default:
            return state;
    }
}