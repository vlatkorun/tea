import { SET_ERROR } from '../../actions/errors';

export default function setError(message) {
    return {
        type: SET_ERROR,
        payload: {
            message
        }
    }
}