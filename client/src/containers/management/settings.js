import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions';

import { Link, browserHistory } from 'react-router';
import { FormattedDate, FormattedTime } from 'react-intl';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import EditTable from 'material-ui-table-edit';

import NewRoomDialog from './room_new';
import SmartTable from '../../components/table/SmartTable';

import moment from 'moment';
import _ from 'lodash';

const RoomTypes = [
  {id: 1, name: 'Superior Double'},
  {id: 2, name: 'Superior Twin'},
  {id: 3, name: 'Luxury Double'},
  {id: 4, name: 'Luxury Twin'},
  {id: 5, name: 'Suite'}
];

const RoomStatus = [
  {id: 1, name: 'Free'},
  {id: 2, name: 'Occupied'}
];

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRoomNumber: 5,
      maxRoomNumber: 50
    };

    this.renderRoomNumber = this.renderRoomNumber.bind(this);
    this.handleChangeRoomNumber = this.handleChangeRoomNumber.bind(this);
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

  handleChangeRoomNumber(event, index, value) {
    this.setState({currentRoomNumber: value});
  }

  renderRoomNumber(max, current) {
    let arr = _.range(1, max + 1).map(val => _.assign({}, {id: val, name: val}) );
    return (
      <DropDownMenu value={current} onChange={this.handleChangeRoomNumber}>
        {arr.map(row => <MenuItem key={row.id} value={row.id} primaryText={`${row.name} rooms`} />)}
      </DropDownMenu>
    )
  }

  onRowSelection(selectedRows) {
    // console.dir(selectedRows);
  }

	render() {

    let { rooms } = this.props;

    let currentRoomNumber = this.state.currentRoomNumber;
    let maxRoomNumber = this.state.maxRoomNumber;

    const headerArr = [
      {alias: 'ID', dataAlias: 'id', format: {type: 'text'}},
      {alias: 'Name', dataAlias: 'name', format: {type: 'text'}},
      {alias: 'Room Type', dataAlias: 'type', format: {type: 'option', names: RoomTypes, key: 'id', value: 'name'}},
      {alias: 'Status', dataAlias: 'status', format: {type: 'option', names: RoomStatus, key: 'id', value: 'name'}},
      {alias: 'Active/Inactive', dataAlias: 'active', format: {type: 'toggle'}}
    ];

    // const headerArr = [
    //   {alias: 'ID', dataAlias: 'id', format: {type: 'text'}},
    //   {alias: 'Name', dataAlias: 'lastName', format: {type: 'input', inputType: 'text'}},
    //   {alias: 'Room Type', dataAlias: 'roomType', format: {type: 'select', names: RoomTypes}},
    //   {alias: 'Status', dataAlias: 'status', format: {type: 'status'}},
    //   {alias: 'Active/Inactive', dataAlias: 'active', format: {type: 'toggle'}}
    // ];
    // 
    // let rooms = [
    //   {id: 1, name: 101, roomType: 'Superior Twin', status: 1, active: true},
    //   {id: 2, name: 102, roomType: 'Superior Twin', status: 1, active: true},
    //   {id: 3, name: 103, roomType: 'Superior Twin', status: 1, active: true}
    // ];

    const tableConf = {
      tableHeaders: headerArr,
      data: rooms.data,
      offset: 0,
      total: rooms.total,
      limit: 10,
      onPageClick: this.goTo,
      onRowSelection: this.onRowSelection,
      config: {
        selectable: true,
        displaySelectAll: true,
        adjustForCheckbox: true,
        displayRowCheckbox: true,
        showRowHover: false,
        stripedRows: false
      }
    };

    // const rows = [];

    // const headers = [
    //   {value: 'Id', type: 'ReadOnly', width: 50},
    //   {value: 'Name', type: 'TextField', width: 150},
    //   {value: 'Room Type', type: 'DropDownMenu', width: 150},
    //   {value: 'Status', type: 'TextField', width: 50},
    //   {value: 'Active/Inactive', type: 'Toggle', width: 50},
    //   {value: 'Last Edited By', type: 'ReadOnly', width: 100}
    // ];

    // <EditTable
    //       onChange={this.onChangeHandler()}
    //       rows={rows}
    //       headerColumns={headers}
    //     />
    //     Please choose the number of rooms in your hotel: {this.renderRoomNumber(maxRoomNumber, currentRoomNumber)}

    return (
      <div>
        <AppBar
          title="Rooms Settings"
          iconElementLeft={ this.renderBarLeftIcon() }
          iconElementRight={ this.renderBarRightIcon() }
        />
        <br />
        <SmartTable {...tableConf}>
          <NewRoomDialog />
        </SmartTable>
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

export default connect( mapStateToProps, { fetchRooms } )(Settings);
