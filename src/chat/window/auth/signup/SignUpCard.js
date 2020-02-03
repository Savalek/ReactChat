import React from "react";
import Server from "../../../Server";
import './SignUpCard.css'

class SignUpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            color: '#000000',
            errMsg: '',
        };
        this.nameOnChange = this.nameOnChange.bind(this);
        this.colorOnChange = this.colorOnChange.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
    }

    nameOnChange(event) {
        this.setState({name: event.target.value});
    }

    colorOnChange(event) {
        this.setState({color: event.target.value});
    }

    registerNewUser() {
        let {name, color} = this.state;
        Server.addUser({name, color})
            .then(id => Server.getUserById(id))
            .then(this.props.onUserAuthorized)
            .catch(err => this.setState({errMsg: err.title}));
    }

    render() {
        return (
            <div className={'chat-login-card'}>
                <span>Enter your name:</span>
                <input onChange={this.nameOnChange}/>
                <span>Select your color:</span>
                <input className={'chat-user-color-picker-input'} onChange={this.colorOnChange} type="color"/>
                <button onClick={this.registerNewUser}
                        disabled={!this.state.name}>
                    Sign Up
                </button>
                {this.state.errMsg ? <span className={'error-span'}>{this.state.errMsg}</span> : null}
            </div>
        );
    }
}

export default SignUpCard;