import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/app';
import Authentication from './containers/authentication';
import OrdersList from './containers/orders_list';
import OrderNew from './containers/order_new';
import Order from './containers/order';
import EnsureLoggedInContainer from './components/security/ensure_logged_in_container'

export default (
  <Route path='/' component={ App }>
    <IndexRedirect to='login' />
    <Route path='login' component={ Authentication } />
    <Route component={EnsureLoggedInContainer}>
        <Route path='reservations' component={ OrdersList } />
        <Route path='reservation/new' component={ OrderNew } />
        <Route path='reservation/edit/:id' component={ OrderNew } />
        <Route path='reservation/:id' component={ Order } />
    </Route>
  </Route>
)
