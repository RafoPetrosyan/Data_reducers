import {combineReducers} from "redux";

import data from "state/data";
import modal from "state/modal/reducer";
import session from "state/concepts/session/reducers";

const rootReducer = combineReducers({
    data,
    modal,
    session,
});

export default rootReducer;