import { createSelector } from 'reselect'

const getTweetsLoadingSelector = createSelector(
    [(state) => state.tweets.isLoadingTweets],
    (isLoadingTweets) => isLoadingTweets
);

export default getTweetsLoadingSelector;