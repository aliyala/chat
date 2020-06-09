import React, {useState} from 'react';
import SendRounded from '@material-ui/icons/SendRounded';
import {FlexBox, SendButton, Textarea} from "./NewMessage.styles";

export default function NewMessage({onSend}) {
    const [text, setText] = useState('');

    const handleSend = async () => {
        await onSend(text);
        setText(''); // todo clear text only after success sending
    };

    return (
        <FlexBox>
            <Textarea
                id="outlined-textarea"
                multiline
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <SendButton
                color="primary"
                aria-label="send message"
                onClick={handleSend}
                disabled={!text.trim()}
            >
                <SendRounded />
            </SendButton>
        </FlexBox>
    )
};