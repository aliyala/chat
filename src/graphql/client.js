import { ApolloClient } from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

const link = createHttpLink({ uri: 'http://localhost:5000/graphql' })

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/graphql',
  options: {
    reconnect: true,
  },
})

const splittedLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition'
            && definition.operation === 'subscription'
    )
  },
  wsLink,
  link,
)

export const client = new ApolloClient({
  link: splittedLink,
  cache: new InMemoryCache(),
})
