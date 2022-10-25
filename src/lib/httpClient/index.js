import axios from 'axios';

import { BASE_URL } from "constanst/globals";
import Account from "lib/account";

const httpClient = axios.create({
    baseURL: BASE_URL,
});

httpClient.interceptors.request.use((config) => {

    const accessToken = Account.getAccessToken();
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            Account.delete();
        }
        return Promise.reject(error)
    }
);

export default httpClient;