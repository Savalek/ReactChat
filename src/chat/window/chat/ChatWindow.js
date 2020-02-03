import React from "react";
import MessageRowRight from "./message/row/right/MessageRowRight";
import MessageRowLeft from "./message/row/left/MessageRowLeft";
import MessageInput from "./message/input/MessageInput";
import Server from "../../Server";
import './ChatWindow.css'

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.loadMessages = this.loadMessages.bind(this);
    }

    componentDidMount() {
        this.loadMessages();
        this.intervalId = setInterval(this.loadMessages, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadMessages() {
        let messagesPromise = Server.loadMessages();
        messagesPromise.then(messages => {
            this.setState({messages});
            this.scrollDown();
        });
    }

    scrollDown() {
        let elem = document.getElementById('chat-window-id');
        elem.scrollTop = elem.scrollHeight;
    }

    render() {
        let currentUser = this.props.currentUser;
        let messages = this.state.messages.map(msg => {
            if (currentUser.id === msg.userId) {
                return <MessageRowRight key={msg.id} message={msg}/>;
            } else {
                return <MessageRowLeft key={msg.id} message={msg}/>;
            }
        });
        return (
            <div>
                <h2 style={{textAlign: 'center', color: currentUser.color}}>Current user: {currentUser.name}</h2>
                <div id={'chat-window-id'} className={'chat-window'}>
                    {messages}
                </div>
                <MessageInput currentUser={this.props.currentUser}/>
            </div>
        );
    }
}

export default ChatWindow;