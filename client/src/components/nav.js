import React, { Component } from 'react';

import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    let buttonStyle = {
      color: 'rgba(0, 0, 0, 0.8)',
      textDecoration: 'none'
    }

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <AppBar
            title='HMS'
            onLeftIconButtonTouchTap={this.handleToggle}
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
      </div>
    );
  }
}

export default Nav;
