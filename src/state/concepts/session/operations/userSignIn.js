import { createLogic } from 'redux-logic';

import * as types from "state/concepts/session/types";
import { signInUserEndpoint } from "state/concepts/session/endpoints";
import {dataApiFailure, dataApiRequest, dataApiSuccess} from "state/data/actions";

const userSignIn = createLogic({
    type: types.USER_SIGN_IN,
    latest: true,

    async process({ action, httpClient }, dispatch, done) {
        const { endpoint, url } = signInUserEndpoint;

        dispatch(dataApiRequest({ endpoint }));

        const body = {
            username: action.payload.login,
            password: action.payload.password,
        };

        console.log('body', body)

        try {
            const { data } = await httpClient.get(url, body);
            console.log('operation', data);

            dispatch(dataApiSuccess({ endpoint }));

        }catch (e){
            dispatch(dataApiFailure({ endpoint }));
        }
        done();
    },
});

export default userSignIn;