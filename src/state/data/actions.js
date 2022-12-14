import * as types from 'state/data/types';

export const dataApiRequest = ({ endpoint }) => ({
    type: types.DATA_API_REQUEST,
    endpoint,
});

export const dataApiSuccess = ({ endpoint, response }) => ({
    type: types.DATA_API_SUCCESS,
    endpoint,
    response,
});

export const dataApiFailure = ({ endpoint, error }) => ({
    type: types.DATA_API_FAILURE,
    error,
    endpoint,
});

export const clearDataReducer = () => ({
    type: types.CLEAR_DATA_REDUCER,
});