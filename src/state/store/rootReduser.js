import {combineReducers} from "redux";

import dataReducer from "state/data";
import sessionReducer from "state/concepts/session/reducers";
import modalReducer from "state/modal/reducer";

const rootReducer = combineReducers({
    dataReducer,
    sessionReducer,
    modalReducer,
});

export default rootReducer;