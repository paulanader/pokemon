import { setup } from 'axios-cache-adapter';

const cache = {
    maxAge: 60 * 60 * 24 * 365 * 1000,
    readHeaders: true,
    exclude: { query: false },
};

export const Api = setup({
    baseURL: process.env.REACT_APP_API_BASE_URL ?? '',
    cache,
});

export const GraphQL = setup({
    baseURL: process.env.REACT_APP_API_GRAPHQL_BASE_URL ?? '',
    cache,
});
