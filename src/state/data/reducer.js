import * as types from 'state/data/types';

const initialState = {
    meta: {},
};
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DATA_API_REQUEST:
            return {
                meta: { [action.endpoint]: { loading: true } },
            };
        case types.DATA_API_SUCCESS:
            return {
                meta: { [action.endpoint]: { loading: false, response: action.response } },
            };
        case types.DATA_API_FAILURE:
            return {
                meta: { [action.endpoint]: { loading: false, response: action.response } },
            };
        default:
            return state;
    }
};

export default dataReducer;
