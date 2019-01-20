import { SET_API_ERROR } from '../../actions/errors';

const messages = {
  400: 'Invalid request',
  404: 'Resource not found',
  500: 'Server error',
};

export default function setApiError({ httpStatus }) {
    return {
        type: SET_API_ERROR,
        payload: {
            message: _.get(messages, httpStatus, 'Server error'),
            httpStatus,
        }
    }
}