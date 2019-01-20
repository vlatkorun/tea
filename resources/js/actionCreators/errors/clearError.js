import { CLEAR_ERROR } from '../../actions/errors';

export default function clearError() {
    return {
        type: CLEAR_ERROR,
    }
}