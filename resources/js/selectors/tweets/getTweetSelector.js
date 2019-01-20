import { createSelector } from 'reselect'

import Tweet from '../../models/Tweet';

const getTweetSelector = createSelector(
    [(state) => state.tweets.tweet],
    (tweet) => {
        return tweet ? new Tweet(tweet) : null;
    }
);

export default getTweetSelector;