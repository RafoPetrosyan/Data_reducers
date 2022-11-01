import { createLogicMiddleware } from "redux-logic";
import {applyMiddleware, legacy_createStore as createStore, compose} from "redux";

import httpClient from "lib/httpClient";

import rootLogics from "./rootlogic";
import rootReducer from "./rootReduser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const dips = { httpClient };
const logicMiddleware = createLogicMiddleware(rootLogics, dips);
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(logicMiddleware) ));