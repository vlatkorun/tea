import axios from 'axios';
import { api } from './config';
import setApiError from './actionCreators/errors/setApiError';

export default function configureAxios(options = {}) {

    const {
        store,
        baseURL,
        timeout,
    } = options;

    axios.defaults.baseURL = baseURL || api.apiUrl || null;
    axios.defaults.timeout = timeout || api.timeout || null;

    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    let token = document.head.querySelector('meta[name="csrf-token"]');

    if(token) {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    }

    if(store) {

        // axios.interceptors.request.use(function (config) {
        //     // Do something before request is sent
        //     return config;
        // }, function (error) {
        //     debugger;
        //     // Do something with request error
        //     return Promise.reject(error);
        // });

        axios.interceptors.response.use(
            (response) => response,
            (error) => {
                store.dispatch(setApiError({
                    httpStatus: error.response.status
                }));
                return error;
            },
        );
    }
}