import React from "react";
import Server from "../../../../Server";
import './MessageInput.css'

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.inputOnChange = this.inputOnChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.onKeyEvent = this.onKeyEvent.bind(this);
    }

    inputOnChange(event) {
        this.setState({text: event.target.value});
    }

    sendMessage() {
        let currentUser = this.props.currentUser;
        let text = this.state.text;
        Server.addMessage(currentUser.id, text)
            .then(res => this.setState({text: ''}))
            .catch(err => alert(err.title));
    }

    onKeyEvent(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            this.sendMessage();
        }
    }

    render() {
        return (
            <div className={'chat-message-input-block'}>
                <textarea className={'chat-message-input-textarea'}
                          value={this.state.text}
                          onChange={this.inputOnChange}
                          onKeyDown={this.onKeyEvent}/>
                <button onClick={this.sendMessage}>Send message</button>
            </div>
        );
    }
}

export default MessageInput;