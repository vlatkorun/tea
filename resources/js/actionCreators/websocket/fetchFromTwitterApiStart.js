import { FETCH_FROM_TWITTER_API_START } from '../../actions/websocket';

export default function fetchFromTwitterApiStart(data) {
    return function(dispatch) {
        dispatch({
            type: FETCH_FROM_TWITTER_API_START
        })
    }
}