import { createSelector } from 'reselect'

import Tweet from '../../models/Tweet';

const getTweetsSelector = createSelector(
    [(state) => state.tweets.tweets],
    (tweets) => {
        return tweets.map((tweet) => new Tweet(tweet));
    }
);

export default getTweetsSelector;