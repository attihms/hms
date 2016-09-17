import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../actions'
import Login from '../components/security/login'

class Authentication extends Component {

    render() {
        const {
            login,
            isAuthenticated
        } = this.props

        return (
            <div>
                <Login submit={ this.props.login } />
            </div>
        )
    }
}

Authentication.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    const {
        auth: {
            isAuthenticated
        }
    } = state

    return {
        isAuthenticated
    }
}

export default connect(mapStateToProps, actionCreators)(Authentication)
