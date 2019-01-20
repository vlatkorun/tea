import { GET_TWEET_FINISH } from '../../actions/tweets';

export default function getTweetStart({ tweet }) {
    return {
        type: GET_TWEET_FINISH,
        payload: {
            tweet
        }
    }
}