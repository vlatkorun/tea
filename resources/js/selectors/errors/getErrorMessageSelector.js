import { createSelector } from 'reselect'

const getErrorMessageSelector = createSelector(
    [(state) => state.errors.message],
    (message) => message
);

export default getErrorMessageSelector;