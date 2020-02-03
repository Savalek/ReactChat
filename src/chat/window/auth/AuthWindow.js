import React from "react";
import Server from "../../Server";
import LoginCard from "./login/LoginCard";
import SignUpCard from "./signup/SignUpCard";
import './AuthWindow.css'

class AuthWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentAuthType: 'login'};
    }

    //TODO remove it
    enterBy(userName) {
        Server.getUserIdByName(userName)
            .then(Server.getUserById)
            .then(this.props.onUserAuthorized)
    }

    render() {
        let card;
        if (this.state.currentAuthType === 'login') {
            card = <LoginCard {...this.props}/>;
        } else {
            card = <SignUpCard {...this.props}/>;
        }
        return (
            <div className={'chat-auth-window centered'}>
                <div className={'chat-auth-window-button-group'}>
                    <button disabled={this.state.currentAuthType === 'login'}
                            onClick={() => this.setState({currentAuthType: 'login'})}>
                        Login
                    </button>
                    <button disabled={this.state.currentAuthType === 'signUp'}
                            onClick={() => this.setState({currentAuthType: 'signUp'})}>
                        Sign
                    </button>
                </div>
                {card}

                <button onClick={event => this.enterBy('Savalek')}>Savalek</button>
                <button onClick={event => this.enterBy('Lika')}>Lika</button>

            </div>
        );
    }
}

export default AuthWindow;