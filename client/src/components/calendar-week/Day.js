import React, { Component } from 'react';

import styles from './Calendar.scss';

export default class Day extends Component {
    render() {
        const { day } = this.props;

        return <div>
            { day.number }
        </div>
    }
}