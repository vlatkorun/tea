import { SET_CLIENT_ID } from '../../actions/user';

export default function setClientId(client_id) {
    return {
        type: SET_CLIENT_ID,
        payload: {
            client_id
        }
    }
}