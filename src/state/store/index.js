import { createLogicMiddleware } from "redux-logic";
import {applyMiddleware, legacy_createStore as createStore, compose, combineReducers} from "redux";

import httpClient from "lib/httpClient";

import dataReducer from "state/data";
import sessionReducer from "state/concepts/session/reducers";
import sessionOperations from "state/concepts/session/operations";

const rootReducer = combineReducers({
    dataReducer,
    sessionReducer,
});

const rootLogics = [
   ...sessionOperations,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const dips = { httpClient };
const logicMiddleware = createLogicMiddleware(rootLogics, dips);
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(logicMiddleware) ));