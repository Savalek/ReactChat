import React from "react";
import Message from "../../Message";
import './MessageRowLeft.css'
import '../MessageRow.css'

function MessageRowLeft(props) {
    return (
        <div className={'chat-message-row chat-message-row-left'}>
            <Message {...props}/>
        </div>
    );
}

export default MessageRowLeft;