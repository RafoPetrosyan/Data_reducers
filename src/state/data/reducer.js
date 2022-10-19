import { mergeDeepRight } from 'ramda';

import * as types from 'state/data/types';

const initialState = {
    meta: {},
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DATA_API_REQUEST:
            return mergeDeepRight(state, {
                meta: { [action.endpoint]: { loading: true } },
            });
        case types.DATA_API_SUCCESS:
            return mergeDeepRight(state, {
                meta: { [action.endpoint]: { loading: false } },
            });
        case types.DATA_API_FAILURE:
            return mergeDeepRight(state, {
                meta: { [action.endpoint]: { loading: false } },
            });
        default:
            return state;
    }
};

export default dataReducer;
