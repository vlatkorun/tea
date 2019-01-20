import {
    GET_NEW_TWEETS
} from '../actions/websocket';

import getNewTweets from '../actionCreators/websocket/getNewTweets';

const channels = [
    {
        name: 'tweets',
        events: [
            {
                name: GET_NEW_TWEETS,
                actionCreator: getNewTweets
            }
        ],
    }
];

export default channels;