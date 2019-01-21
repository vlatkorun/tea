import update from 'immutability-helper';

import {
    SET_CLIENT_ID,
} from '../actions/user';

const initialState = {
    client_id: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENT_ID:
            return update(state, {
                client_id: { $set: action.payload.client_id },
            });
        default:
            return state;
    }
}