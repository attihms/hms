import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserNameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
    }

    handleSubmit() {
        const { username, password } = this.state;
        const creds = {
            username: username.trim(),
            password: password.trim()
        };

        this.props.submit(creds)
            .then(res => {
                browserHistory.replace("/reservations");
            });
    }

    render() {
        const { errorMessage } = this.props
        const {
            username,
            password
        } = this.state

        return (
            <div>
                <TextField
                    floatingLabelText='User name'
                    hintText='User name'
                    fullWidth={true}
                    name='username'
                    value={ username }
                    onChange={ this.handleUserNameChange }
                />
                <TextField
                    type='password'
                    floatingLabelText='Password'
                    hintText='Password'
                    fullWidth={true}
                    name='password'
                    value={ password }
                    onChange={ this.handlePasswordChange }
                />
                <RaisedButton primary={true}
                    type='button'
                    label='Login'
                    onClick={ this.handleSubmit }
                />
            </div>
        )
    }
}

Login.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Login
