import { createSelector } from 'reselect'

const getIsRequestingSelector = createSelector(
    [(state) => state.tweets.fetchFromApi.isRequesting],
    (isRequesting) => isRequesting
);

export default getIsRequestingSelector;