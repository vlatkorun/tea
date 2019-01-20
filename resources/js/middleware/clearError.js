import clearErrorActionCreator from '../actionCreators/errors/clearError';

const clearError = store => next => action => {

    if(action.type === '@@router/LOCATION_CHANGE') {
        store.dispatch(clearErrorActionCreator());
    }

    return next(action);
};

export default clearError;