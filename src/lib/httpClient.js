import axios from 'axios';

import {API_HOST} from "constanst/globals";
import Account from "lib/account";
import { store } from "state/store";
import {dataApiRequest, dataApiSuccess} from "state/data/actions";

console.log(API_HOST)

const httpClient = axios.create({
    baseURL: `${API_HOST}/api/`,
});

httpClient.interceptors.request.use((config) => {
    store.dispatch(dataApiRequest({ endpoint: config?.url }));

    const accessToken = Account.getAccessToken();
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response) => {
        store.dispatch(dataApiSuccess({
            endpoint: response?.config?.url,
            response: response?.data?.message,
        }));
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            Account.delete();
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            store.dispatch(dataApiSuccess({
                endpoint: error?.config?.url,
                response: error.response.data?.message,
            }));
        }
        return Promise.reject(error)
    }
);

export default httpClient;