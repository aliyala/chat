import gql from "graphql-tag/lib/graphql-tag.umd";

export const MESSAGES_SUBSCRIPTION = gql`
  subscription onAddMessageSub {
    onAddMessage {
        author
        content
        createdDate
    }
  }
`;