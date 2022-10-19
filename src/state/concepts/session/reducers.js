import { combineReducers } from "redux";

import * as types from "state/concepts/session/types";

const currentUser = (state = null, action) => {
    switch (action.type) {
        case types.USER_SIGN_IN_SUCCESS:
            return action.currentUser;
        case types.USER_SIGN_OUT_SUCCESS:
            return null;
        default:
            return state;
    }
};

const sessionReducer = combineReducers({
    currentUser,
});

export default sessionReducer;