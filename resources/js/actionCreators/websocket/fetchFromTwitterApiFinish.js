import { FETCH_FROM_TWITTER_API_FINISH } from '../../actions/websocket';

export default function fetchFromTwitterApiFinish(data) {
    return function(dispatch) {
        dispatch({
            type: FETCH_FROM_TWITTER_API_FINISH
        })
    }
}