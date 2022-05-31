import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://pokeapi.co/api/v2',
    cache: new InMemoryCache(),
});
