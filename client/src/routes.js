import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './components/app';
import LandingPage from './containers/landing_page';
import OrdersList from './containers/orders_list';
import OrderNew from './containers/order_new';
import Order from './containers/order';
import Login from './containers/security/login';
import Signup from './containers/security/signup';
import EnsureLoggedInContainer from './containers/security/ensure_logged_in_container'

export default (
  <Route component={ App }>
    <Route path='/' component={ LandingPage } />
    <Route path='login' component={ Login } />
    <Route path='signup' component={ Signup } />
    <Route component={ EnsureLoggedInContainer }>
      <Route path='reservations' component={ OrdersList } />
      <Route path='reservation/new' component={ OrderNew } />
      <Route path='reservation/edit/:id' component={ OrderNew } />
      <Route path='reservation/:id' component={ Order } />
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)
