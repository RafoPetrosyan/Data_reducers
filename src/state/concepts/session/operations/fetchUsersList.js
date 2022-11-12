import { createLogic } from 'redux-logic';

import {FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS} from "state/concepts/session/types";
import {fetchUsersListEndpoint} from "state/concepts/session/endpoints";
import {makeAction} from "state/concepts/makeAction";

const fetchUsersList = createLogic({
    type: FETCH_USERS_LIST_REQUEST,
    latest: true,

    async process({ httpClient }, dispatch, done) {
        const { url } = fetchUsersListEndpoint;

        try {
            const { data: {dataCount, users} } = await httpClient.get(url);

            dispatch(makeAction(FETCH_USERS_LIST_SUCCESS, {dataCount, users}));

        }catch {
            // take in httpClient
        }
        done();
    },
});

export default fetchUsersList;