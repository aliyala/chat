import { gql } from 'apollo-boost'

export const ADD_MESSAGES = gql`
    mutation CreateMessage($author: String!, $content: String!) {
        createMessage(author: $author, content: $content){
            author
            content
            createdDate
        }
    }
`
