import {userSignInRoute} from "lib/apiRoutes";

import endpoint from "utils/endpoint";

import * as types from "state/concepts/session/types";

export const signInUserEndpoint = endpoint(types.USER_SIGN_IN, 'POST', userSignInRoute);