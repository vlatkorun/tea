import { createSelector } from 'reselect'

const getHttpStatusSelector = createSelector(
    [(state) => state.errors.httpStatus],
    (httpStatus) => httpStatus
);

export default getHttpStatusSelector;