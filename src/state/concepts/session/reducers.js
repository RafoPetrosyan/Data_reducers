import { combineReducers } from "redux";

import * as types from "state/concepts/session/types";
import Account from "lib/account";

const currentUser = (state = Account.getAccount(), action) => {
    switch (action.type) {
        case types.USER_SIGN_IN_SUCCESS:
            return action.payload;
        case types.USER_SIGN_OUT:
            return null;
        default:
            return state;
    }
};

const usersList = (state = {usersList: [], dataCount: 0}, action) => {
    switch (action.type) {
        case types.FETCH_USERS_LIST_SUCCESS:
            return {
                usersList: action.payload.users,
                dataCount: action.payload.dataCount,
            }
        default:
            return state;
    }
};

const sessionReducer = combineReducers({
    currentUser,
    usersList,
});

export default sessionReducer;