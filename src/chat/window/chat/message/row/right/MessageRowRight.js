import React from "react";
import Message from "../../Message";
import './MessageRowRight.css';
import '../MessageRow.css'

function MessageRowRight(props) {
    return (
        <div className={'chat-message-row chat-message-row-right'}>
            <Message {...props}/>
        </div>
    );
}

export default MessageRowRight;