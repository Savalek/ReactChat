import React from "react";
import Server from "../../../Server";
import './Message.css'

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.msg = props.message;
        this.state = {
            author: {
                name: '',
                color: '',
            }
        };
        Server.getUserById(this.msg.userId)
            .then(user => this.setState({author: user}));
    }

    render() {
        return (
            <div className={'chat-message'}>
                    <span className={'chat-message-title'}
                          style={{color: this.state.author.color}}>
                        {this.state.author.name}
                    </span>
                <pre>{this.msg.text}</pre>
            </div>
        );
    }
}

export default Message;