import { createSelector } from 'reselect'

const getClientIdSelector = createSelector(
    [(state) => state.user.client_id],
    (client_id) => client_id
);

export default getClientIdSelector;