import update from 'immutability-helper';

import {
    GET_TWEETS_START,
    GET_TWEETS_FINISH,
    GET_TWEET_START,
    GET_TWEET_FINISH,
    SET_TWEETS_FILTERS,
} from '../actions/tweets';

const initialState = {
    isLoadingTweets: false,
    tweets: [],
    isLoadingTweet: false,
    tweet: null,
    filters: {
        text: null,
        keyword: null,
        hashtag: null,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TWEETS_START:
            return update(state, {
                isLoadingTweets: { $set: true },
            });
        case GET_TWEETS_FINISH:
            return update(state, {
                isLoadingTweets: { $set: false },
                tweets: { $set: action.payload.tweets }
            });
        case GET_TWEET_START:
            return update(state, {
                isLoadingTweet: { $set: true },
            });
        case GET_TWEET_FINISH:
            return update(state, {
                isLoadingTweet: { $set: false },
                tweet: { $set: action.payload.tweet }
            });
        case SET_TWEETS_FILTERS:
            return update(state, {
                filters: { $set: action.payload.filters },
            });
        default:
            return state
    }
}