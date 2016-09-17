import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { orange800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange800,
  }
});

export default class App extends Component {

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <IntlProvider locale="en">
                { this.props.children }
            </IntlProvider>
        </div>
      </MuiThemeProvider>
    );
  }
}
