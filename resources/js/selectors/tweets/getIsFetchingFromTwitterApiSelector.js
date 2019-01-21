import { createSelector } from 'reselect'

const getIsFetchingFromTwitterApiSelector = createSelector(
    [(state) => state.tweets.fetchFromApi.isFetching],
    (isFetching) => isFetching
);

export default getIsFetchingFromTwitterApiSelector;