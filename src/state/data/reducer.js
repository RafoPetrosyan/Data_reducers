import * as types from 'state/data/types';

const dataReducer = (state = {}, action) => {
    switch (action.type) {
        case types.DATA_API_REQUEST:
            return {
                ...state,
                [action.endpoint]: { loading: true },
            };
        case types.DATA_API_SUCCESS:
            return {
                ...state,
                [action.endpoint]: { loading: false, response: action.response },
            };
        case types.DATA_API_FAILURE:
            return {
                ...state,
                [action.endpoint]: { loading: false, error: action.error },
            };
        case types.CLEAR_DATA_REDUCER:
            return {};
        default:
            return state;
    }
};

export default dataReducer;
