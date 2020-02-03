import React from "react";
import Server from "../../../Server";
import './LoginCard.css'

class LoginCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.inputNameOnChange = this.inputNameOnChange.bind(this);
        this.tryLoginIn = this.tryLoginIn.bind(this);
    }

    inputNameOnChange(event) {
        this.setState({username: event.target.value, errMsg: null});
    }

    async tryLoginIn() {
        let userName = this.state.username;
        Server.getUserIdByName(userName)
            .then(Server.getUserById)
            .then(this.props.onUserAuthorized)
            .catch(err => this.setState({errMsg: err.title}));
    }

    render() {
        return (
            <div className={'chat-login-card'}>
                <span>Enter your name:</span>
                <input onChange={this.inputNameOnChange}/>
                <button onClick={this.tryLoginIn}
                        disabled={!this.state.username}>
                    Login In
                </button>
                {this.state.errMsg ? <span className={'error-span'}>{this.state.errMsg}</span> : null}
            </div>
        );
    }
}

export default LoginCard;