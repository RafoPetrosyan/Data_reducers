import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://timeless.brainfors.am/api/',
});

httpClient.interceptors.request.use((config) => {

    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
        config.headers['x-authorization'] = accessToken
    }
    return config
});

httpClient.interceptors.response.use(

    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('401')
        }
        if (error.response && error.response.data && error.response.status !== 401) {
            console.log('!401');
        }
        return Promise.reject(error)
    }
);

export default httpClient;