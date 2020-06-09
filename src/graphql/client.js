import { ApolloClient } from 'apollo-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from "apollo-link-ws";
import {createHttpLink, HttpLink} from "apollo-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloLink, split} from 'apollo-link';
import {getMainDefinition} from "apollo-utilities";
//
// export const client = new ApolloClient({
//     uri: 'http://localhost:5000/graphql',
//     fetchOptions: {
//         mode: 'no-cors',
//     },
// });

const enchancedFetch = (url, init) => {
    //const token = getToken()
    return fetch(url, {
        ...init,
        headers: {
            ...init.headers,
            //'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            //'Accept': 'application/json',
            //'Sec-Fetch-Mode': 'cors'
            //...(token && { authorization: `Bearer ${token}` }),
        },
    }).then(response => response)
}

const httpLink = new HttpLink({
    uri: `http://localhost:5000/graphql`,
    //credentials: 'include',
    fetchOptions: {
        mode: 'no-cors',
    },
    //fetch: enchancedFetch,
})

// const errorLink = onError(error => {
//     const { graphQLErrors = [], networkError = {}, operation = {}, forward } =
//     error || {};
//     const { getContext } = operation || {};
//     const { scope, headers = {} } = getContext() || {};
//     const { message: networkErrorMessage = '' } = networkError || {};
//     const networkFailed = message =>
//         typeof message === 'string' &&
//         message.startsWith('NetworkError when attempting to fetch resource');
//
//     if (networkFailed(networkErrorMessage)) return forward(operation);
// });

//const link = errorLink.concat(httpLink);
//
// const networkInterface = createNetworkInterface({
//     uri: 'http://localhost:5000/graphql' // Your GraphQL endpoint
// });

const wsClient = new SubscriptionClient("ws://localhost:5000/graphql", {
    reconnect: true,
});

//const wsLink = new WebSocketLink(wsClient);

//const link = httpLink.concat(wsLink);
const link = createHttpLink({ uri: "http://localhost:5000/graphql" });

const wsLink = new WebSocketLink({
    uri: `ws://localhost:5000/graphql`,
    options: {
        reconnect: true
    }
});
const splittedlink = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    link,
);

export const client = new ApolloClient({
    link: splittedlink,//ApolloLink.from([link, wsClient]),
    cache: new InMemoryCache()
});