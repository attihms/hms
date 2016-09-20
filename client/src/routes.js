import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';

import LandingPage from './containers/landing_page';
import Signup from './containers/security/signup';
import Login from './containers/security/login';

import EnsureLoggedInContainer from './containers/security/ensure_logged_in_container'
//reservation
import OrdersList from './containers/reservation/orders_list';
import OrderNew from './containers/reservation/order_new';
import Order from './containers/reservation/order';
//room management
import Schedule from './containers/schedule';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ LandingPage } />
    <Route path='login' component={ Login } />
    <Route path='signup' component={ Signup } />
    <Route component={ EnsureLoggedInContainer }>
      <Route path='reservations' component={ OrdersList } />
      <Route path='reservation/new' component={ OrderNew } />
      <Route path='reservation/edit/:id' component={ OrderNew } />
      <Route path='reservation/:id' component={ Order } />
      <Route path='schedule' component={ Schedule } />
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)
