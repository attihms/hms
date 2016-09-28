import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { orange800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Nav from './nav';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange800,
  }
});

export default class App extends Component {

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <IntlProvider locale="en">
          <div>
            <div style={{paddingLeft: 256}}>
              { this.props.children }
            </div>
            <Nav />
          </div>
        </IntlProvider>
      </MuiThemeProvider>
    );
  }
}
