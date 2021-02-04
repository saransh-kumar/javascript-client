/* eslint-disable array-callback-return */
/* eslint-disable */
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from '@apollo/client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({ uri: 'http://localhost:9000/graphql' });

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:9000/graphql',
    options: {
        reconnect: true, 
    }
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition'
            && definition.operation === 'subscription'
        );
    }, 
    wsLink,
    httpLink,
);

const apolloclient = new ApolloClient({
cache: new InMemoryCache(),
link: authLink.concat(link),
});

export default apolloclient;
