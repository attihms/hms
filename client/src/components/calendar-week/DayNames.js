import React, { Component } from 'react';

import styles from './Calendar.scss';

export default class DayNames extends Component {
    render() {
        const startDate = this.props.startDate.clone();

        return <div className={ styles.week  + ' ' +  styles.names }>
            <span className={ styles.day }>Room</span>
            <span className={ styles.day }>{startDate.format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(1, 'd').format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(2, 'd').format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(3, 'd').format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(4, 'd').format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(5, 'd').format('ddd')}</span>
            <span className={ styles.day }>{startDate.add(6, 'd').format('ddd')}</span>
        </div>;
    }
}