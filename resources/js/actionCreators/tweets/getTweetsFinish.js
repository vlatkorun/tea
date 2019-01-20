import { GET_TWEETS_FINISH } from '../../actions/tweets';

export default function getTweetsStart({ tweets }) {
    return {
        type: GET_TWEETS_FINISH,
        payload: {
            tweets
        }
    }
}