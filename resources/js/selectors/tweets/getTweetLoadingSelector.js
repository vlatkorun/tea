import { createSelector } from 'reselect'

const getTweetLoadingSelector = createSelector(
    [(state) => state.tweets.isLoadingTweet],
    (isLoadingTweet) => isLoadingTweet
);

export default getTweetLoadingSelector;