import React from 'react';
import './Chat.css'
import AuthWindow from "./chat/window/auth/AuthWindow";
import ChatWindow from "./chat/window/chat/ChatWindow";

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onUserAuthorized = this.onUserAuthorized.bind(this);
    }

    onUserAuthorized(user) {
        this.setState({currentUser: user});
    }

    render() {
        if (!this.state.currentUser) {
            return <AuthWindow onUserAuthorized={this.onUserAuthorized}/>
        } else {
            return <ChatWindow currentUser={this.state.currentUser}/>
        }
    }
}

export default ChatApp;