import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions';

import { Link } from 'react-router';
import { FormattedDate, FormattedTime } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import RaisedButton from 'material-ui/RaisedButton';
import SmartTable from '../components/table/SmartTable';

class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

	componentWillMount() {
		this.props.fetchOrders();
	}

  componentWillUnmount() {}

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

    const headerArr = [
      {alias: 'ID', dataAlias: 'id', format: {type: 'text'}},
      {alias: 'Name', dataAlias: 'lastName', format: {
        type: 'linkNameFormola', url: 'reservation/', names: ['title', 'firstName', 'lastName']}
      },
      {alias: 'Room Type', dataAlias: 'roomType', format: {type: 'text'}},
      {alias: 'Check In', dataAlias: 'checkIn', format: {type: 'dateTime'}},
      {alias: 'Check Out', dataAlias: 'checkOut', format: {type: 'dateTime'}}
    ];

    const tableConf = {
      tableHeaders: headerArr,
      data: orders,
      offset: 0,
      total: orders.length,
      limit: 10,
      onPageClick: this.goTo
    };

    return (
      <div>
        <AppBar
          title="Hotel Managment System"
          iconElementLeft={<span></span>}
          iconElementRight={ this.renderBarRightIcon() }
          />
          <br />
          <SmartTable {...tableConf}>
            <Link to='/reservation/new'>
              <RaisedButton label="Add New Reservation" primary={true} />
            </Link>
          </SmartTable>
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
