import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions';

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

    this.state = {};
  }

	componentWillMount() {
		this.props.fetchRooms();
	}

  componentWillUnmount() {}

  renderBarLeftIcon() {
    return (
      <IconButton iconStyle={{color: '#fff'}} onClick={browserHistory.goBack}>
        <NavigationBack/>
      </IconButton>
    )
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

	render() {

    let { rooms } = this.props;

    return (
      <div>
        <AppBar
          title="Rooms Managment"
          iconElementLeft={this.renderBarLeftIcon()}
          iconElementRight={ this.renderBarRightIcon() }
        />
        <div style={{padding: 20}}>
          <Calendar selected={moment()} rooms={rooms}/>
        </div>
      </div>
    );
	}
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms.all,
    token: state.auth.token
  }
}

export default connect( mapStateToProps, { fetchRooms } )(Schedule);

