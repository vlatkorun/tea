import { push } from 'connected-react-router'

import { RESET_APP } from '../../actions/app';

import resetApi from '../../api/app/reset';

export default function reset(id, params = {}) {
    return async function(dispatch) {

        const { status } = await resetApi(params);

        if(status) {

            dispatch({
                type: RESET_APP
            });

            window.location.href = '/';
        }
    }
}