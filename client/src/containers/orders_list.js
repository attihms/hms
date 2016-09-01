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
import {  Table, TableBody, TableFooter,
          TableHeader, TableHeaderColumn, TableRow,
          TableRowColumn } from 'material-ui/Table';

class OrdersList extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

	componentWillMount() {
		this.props.fetchOrders();
	}

  componentWillUnmount() {}

  renderOrder() {
    const dateFormat = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }
    const timeFormat = {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric'
    }
    return this.props.orders.map((order) => {
      return (
        <TableRow key={order.id}>
          <TableRowColumn>
            <Link to={`reservation/${order.id}`}>
            <strong>{ `${order.title} ${order.firstName} ${order.lastName}`}</strong>
          </Link>
          </TableRowColumn>
          <TableRowColumn>{ order.roomType }</TableRowColumn>
          <TableRowColumn>
            <FormattedDate value={order.checkIn} {...dateFormat}/>
            <b>&nbsp;&nbsp;<FormattedTime value={order.checkOut} {...timeFormat}/></b>
          </TableRowColumn>
          <TableRowColumn>
            <FormattedDate value={order.checkOut} {...dateFormat}/>
            <b>&nbsp;&nbsp;<FormattedTime value={order.checkOut} {...timeFormat}/></b>
          </TableRowColumn>
        </TableRow>
      )
    });
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
    let tableConfig = {
      height: 'calc(100vh - 200px)',
      fixedHeader: true,
      fixedFooter: true,
      selectable: true,
      multiSelectable: false
    }

    let headerConfig = {
      displaySelectAll: false,
      adjustForCheckbox: false,
      enableSelectAll: false,
    }

    let bodyConfig = {
      displayRowCheckbox: false,
      deselectOnClickaway: false,
      stripedRows: false,
      showRowHover: false
    }

		return (
			<div>
        <AppBar
          title="Hotel Managment System"
          iconElementLeft={<span></span>}
          iconElementRight={ this.renderBarRightIcon() }
          />
        <Table {...tableConfig}>
          <TableHeader {...headerConfig}>
            <TableRow>
              <TableHeaderColumn colSpan="4">
                <Link to='/reservation/new'>
                  <RaisedButton label="Add New Reservation" primary={true} />
                </Link>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Room Type</TableHeaderColumn>
              <TableHeaderColumn>Check In</TableHeaderColumn>
              <TableHeaderColumn>Check Out</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody {...bodyConfig}>
            { this.renderOrder() }
          </TableBody>
        </Table>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { orders: state.orders.all }
}

export default connect( mapStateToProps, { fetchOrders } )(OrdersList);
