import React from 'react';
import Progress from "../atoms/Progress/Progress";
import {useMutation, useQuery} from '@apollo/react-hooks';
import MessageList from "../molecules/MessageList/MessageList";
import {GET_MESSAGES} from "../graphql/query/getMessages";
import {MESSAGES_SUBSCRIPTION} from "../graphql/subscription/messages";
import {ADD_MESSAGES} from "../graphql/mutation/addMessage";
import NewMessage from "../molecules/NewMessage/NewMessage";
import CircularProgress from "@material-ui/core/CircularProgress";

function MessagesForm() {
    const { loading, error, data, subscribeToMore } = useQuery(GET_MESSAGES);

    const [addMessageMutation, addMessageMutationResult] = useMutation(ADD_MESSAGES);

    if(loading){
        return <CircularProgress/>
    }
    if(error){
        alert(error);
    }

    const more = () => subscribeToMore({
        document: MESSAGES_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const newMessage = subscriptionData.data.onAddMessage;
            return Object.assign({}, prev, {
                messages: [...prev.messages, newMessage],
            });
        },
    });

    const sendMessageHandle = (text) => {
        addMessageMutation({ variables: { author: 'somebody', content: text } });
    }

    return (
        <>
            <MessageList messages={data.messages} more={more}/>
            <NewMessage onSend={sendMessageHandle}/>
        </>
    );
}

export default MessagesForm;
