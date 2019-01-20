import { SET_TWEETS_FILTERS } from '../../actions/tweets';

// import getTweets from './getTweets';

export default function setFilters(filters = {}) {
    return async function(dispatch) {
        dispatch({
            type: SET_TWEETS_FILTERS,
            payload: {
                filters: {
                    text: filters.text || null,
                    keyword: filters.keyword || null,
                    hashtag: filters.hashtag || null,
                }
            }
        });
    }
}
