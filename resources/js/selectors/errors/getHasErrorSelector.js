import { createSelector } from 'reselect'

const getHasErrorSelector = createSelector(
    [(state) => state.errors.error],
    (error) => error
);

export default getHasErrorSelector;