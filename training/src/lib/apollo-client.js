/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from '@apollo/client/link/context';

const link = new HttpLink({ uri: 'http://localhost:9000/graphql' });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

const apolloclient = new ApolloClient({
cache: new InMemoryCache(),
link: authLink.concat(link),
});

export default apolloclient;
