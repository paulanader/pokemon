import { setup } from 'axios-cache-adapter';

const Api = setup({
    baseURL: process.env.REACT_APP_API_BASE_URL ?? '',
    cache: {
        maxAge: 60 * 60 * 24 * 365 * 1000,
        readHeaders: true,
        exclude: { query: false },
    },
});

export default Api;
