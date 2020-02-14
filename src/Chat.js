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
            return (
                <div>
                    <AuthWindow onUserAuthorized={this.onUserAuthorized}/>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.548985381493!2d39.717114174328536!3d47.22571894044982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5066121f8c470fb0!2z0JTQvtCx0YDRi9C5INCt0LvRjA!5e0!3m2!1sru!2sru!4v1581663107017!5m2!1sru!2sru"
                        width="600" height="450" frameBorder="0" style="border:0;" allowFullScreen=""/>
                </div>
            )
        } else {
            return <ChatWindow currentUser={this.state.currentUser}/>
        }
    }
}

export default ChatApp;