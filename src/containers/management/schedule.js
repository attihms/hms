import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms, fetchSchedule } from '../../actions';

import { Link, browserHistory } from 'react-router';
import { FormattedDate, FormattedTime } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Calendar from '../../components/calendar-week/Calendar';
import moment from 'moment';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment()
    };

    this.dateUpdateHandler = this.dateUpdateHandler.bind(this);
  }

	componentWillMount() {
		this.props.fetchRooms();
    let dateObj = this.getStartEnd(this.state.startDate);
    this.props.fetchSchedule(dateObj.start, dateObj.end);
	}

  componentWillUnmount() {}

  renderBarLeftIcon() {
    return (
      <IconButton iconStyle={{color: '#fff'}} onClick={browserHistory.goBack}>
        <NavigationBack/>
      </IconButton>
    )
  }

  getStartEnd(date) {
    let start = date.clone().format('YYYY-MM-DD');
    let end = date.clone().add(6, 'd').format('YYYY-MM-DD');
    return {
      start,
      end
    }
  }

  renderBarRightIcon() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }

  dateUpdateHandler(newDate) {
    let dateObj = this.getStartEnd(this.state.startDate);
    this.props.fetchSchedule(dateObj.start, dateObj.end);
  }

  dayClickHandler(selectedDay, selectedRoom) {
    console.log('selectedDay', selectedDay.date.format('YYYY-MM-DD'));
    console.log('selectedRoom', selectedRoom);
  }

	render() {

    const { rooms, schedule } = this.props;
    const { startDate } = this.state;

    return (
      <div>
        <AppBar
          title="Rooms Managment"
          iconElementLeft={this.renderBarLeftIcon()}
          iconElementRight={this.renderBarRightIcon()}
        />
        <div style={{padding: 20}}>
          <Calendar
            selected={startDate}
            rooms={rooms}
            schedule={schedule}
            onDateUpdate={this.dateUpdateHandler}
            onDayClick={this.dayClickHandler}
          />
        </div>
      </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms.all,
    schedule: state.schedule.all,
    token: state.auth.token
  }
}

export default connect( mapStateToProps, { fetchRooms, fetchSchedule } )(Schedule);

