import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions';

import { Link, browserHistory } from 'react-router';
import { FormattedDate, FormattedTime } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Calendar from '../components/calendar/Calendar';
import moment from 'moment';

class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

	componentWillMount() {
		this.props.fetchOrders();
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

    let { orders } = this.props;

    return (
      <div>
        <AppBar
          title="Rooms Managment"
          iconElementLeft={this.renderBarLeftIcon()}
          iconElementRight={ this.renderBarRightIcon() }
          />
          <br />
          <Calendar selected={moment()}/>
      </div>
    );

  //   let tableConfig = {
  //     height: 'calc(100vh - 200px)',
  //     fixedHeader: true,
  //     fixedFooter: true,
  //     selectable: true,
  //     multiSelectable: false
  //   }

  //   let headerConfig = {
  //     displaySelectAll: false,
  //     adjustForCheckbox: false,
  //     enableSelectAll: false,
  //   }

  //   let bodyConfig = {
  //     displayRowCheckbox: false,
  //     deselectOnClickaway: false,
  //     stripedRows: false,
  //     showRowHover: false
  //   }
	}
}

function mapStateToProps(state) {
  return { orders: state.orders.all }
}

export default connect( mapStateToProps, { fetchOrders } )(OrdersList);
