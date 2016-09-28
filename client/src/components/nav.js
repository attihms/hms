import React, { Component } from 'react';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Nav extends Component {

  render() {

    let buttonStyle = {
      color: 'rgba(0, 0, 0, 0.8)',
      textDecoration: 'none'
    }

    return (
      <Drawer>
        <AppBar 
          title={'HMS'}
          iconElementLeft={<span></span>}
        />
        <MenuItem>
          <Link to={`/reservations/overview`} style={buttonStyle}>
            Reservations
          </Link>
        </MenuItem>
        <MenuItem>
          Room Management
          <MenuItem>
            <Link to={`/room_management/schedule`} style={buttonStyle}>
              Schadule
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/room_management/settings`} style={buttonStyle}>
              Settings
            </Link>
          </MenuItem>
        </MenuItem>
      </Drawer>
    );
  }
}
