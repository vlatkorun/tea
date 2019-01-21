import {
    FETCH_FROM_TWITTER_API_START,
    FETCH_FROM_TWITTER_API_FINISH,
} from '../actions/websocket';

import fetchFromTwitterApiStart from '../actionCreators/websocket/fetchFromTwitterApiStart';
import fetchFromTwitterApiFinish from '../actionCreators/websocket/fetchFromTwitterApiFinish';

const channels = [
    {
        name: 'tweets',
        events: [
            {
                name: FETCH_FROM_TWITTER_API_START,
                actionCreator: fetchFromTwitterApiStart
            },
            {
                name: FETCH_FROM_TWITTER_API_FINISH,
                actionCreator: fetchFromTwitterApiFinish
            }
        ],
    }
];

export default channels;