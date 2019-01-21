import { createSelector } from 'reselect'

const fetchTweetsModalVisibilitySelector = createSelector(
    [(state) => state.tweets.fetchFromApi.modalVisible],
    (modalVisible) => modalVisible
);

export default fetchTweetsModalVisibilitySelector;