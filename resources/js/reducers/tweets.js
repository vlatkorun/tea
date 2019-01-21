import update from 'immutability-helper';

import {
    GET_TWEETS_START,
    GET_TWEETS_FINISH,
    GET_TWEET_START,
    GET_TWEET_FINISH,
    SET_TWEETS_FILTERS,
    SHOW_FETCH_MODAL,
    HIDE_FETCH_MODAL,
    REQUEST_FOR_FETCH_START,
    REQUEST_FOR_FETCH_FINISH,
} from '../actions/tweets';

import {
    FETCH_FROM_TWITTER_API_START,
    FETCH_FROM_TWITTER_API_FINISH,
} from '../actions/websocket';

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
    fetchFromApi: {
        modalVisible: false,
        isRequesting: false,
        isFetching: false,
        keyword: null
    }
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
        case SHOW_FETCH_MODAL:
            return update(state, {
                fetchFromApi: {
                    modalVisible: { $set: true }
                },
            });
        case HIDE_FETCH_MODAL:
            return update(state, {
                fetchFromApi: {
                    modalVisible: { $set: false }
                },
            });
        case REQUEST_FOR_FETCH_START:
            return update(state, {
                fetchFromApi: {
                    isRequesting: { $set: true },
                    keyword: { $set: action.payload.keyword || null }
                },
            });
        case REQUEST_FOR_FETCH_FINISH:
            return update(state, {
                fetchFromApi: {
                    isRequesting: { $set: false }
                },
            });
        case FETCH_FROM_TWITTER_API_START:
            return update(state, {
                fetchFromApi: {
                    isFetching: { $set: true },
                },
            });
        case FETCH_FROM_TWITTER_API_FINISH:
            return update(state, {
                fetchFromApi: {
                    isFetching: { $set: false },
                },
            });
        default:
            return state
    }
}