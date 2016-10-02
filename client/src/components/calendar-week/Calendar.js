import React, { PropTypes, Component } from 'react';

import DayNames from './DayNames';
import Week from './Week';

import ArrowLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ArrowRight from 'material-ui/svg-icons/navigation/chevron-right';

import styles from './Calendar.scss';

class Calendar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            week: this.props.selected.clone(),
            rooms: null
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.select = this.select.bind(this);
        this.renderWeeks = this.renderWeeks.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let rooms = null
        if (nextProps.rooms) {
          rooms = nextProps.rooms.data;
        }
        this.setState({rooms});
    }

    previous() {
        var week = this.state.week;
        week.add(-1, 'w');
        this.setState({ week: week });
    }

    next() {
        var week = this.state.week;
        week.add(1, 'w');
        this.setState({ week: week });
    }

    select(day) {
        console.log(day);
        // this.setState({ month: {day: day.date} });
        this.props.selected = day.date;
        this.forceUpdate();
    }

    render() {
        const { rooms } = this.state;

        if(!_.isArray(rooms)) {
          return <div>Loading...</div>
        }

        return (
            <div className={ styles.calendar }>
                <div className={ styles.header }>
                    <i className={ styles.faAngleLeft} onClick={this.previous}>
                        <ArrowLeft />
                    </i>
                    {this.renderMonthLabel()}
                    <i className={ styles.faAngleRight} onClick={this.next}>
                        <ArrowRight />
                    </i>
                </div>
                <DayNames />
                {this.renderWeeks()}
            </div>
        );
    }

    renderWeeks() {
        var weeks = [],
            done = false,
            date = this.state.week.clone(),
            rooms = this.state.rooms,
            monthIndex = date.week(),
            count = 0;

        return rooms.map((room, index) => {
            return (
                <Week 
                    key={index} 
                    date={date.clone()} 
                    month={this.state.week} 
                    select={this.select} 
                    selected={this.props.selected}
                    room={room}
                />
            );
        })

        // while (!done) {
        //     weeks.push(
        //         <Week 
        //             key={date.toString()} 
        //             date={date.clone()} 
        //             month={this.state.month} 
        //             select={this.select} 
        //             selected={this.props.selected} />
        //             );
        //     date.add(1, 'w');
        //     done = count++ > 2 && monthIndex !== date.month();
        //     monthIndex = date.month();
        // }

        return weeks;
    }

    renderMonthLabel() {
        return <span>{this.state.week.format('MMMM Do, YYYY')} - {this.state.week.clone().add(6, 'd').format('MMMM Do, YYYY')}</span>;
    }
}

export default Calendar;