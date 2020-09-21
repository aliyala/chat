import { gql } from 'apollo-boost'

export const GET_MESSAGES = gql`
    query {
        messages{
            author
            content
            createdDate
        }
    }
`
