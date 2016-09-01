import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import OrdersList from './containers/orders_list';
import OrderNew from './containers/order_new';
import Order from './containers/order';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ OrdersList } />
    <Route path='reservation/new' component={ OrderNew } />
    <Route path='reservation/edit/:id' component={ OrderNew } />
    <Route path='reservation/:id' component={ Order } />
    <Redirect from='*' to='/' />
  </Route>
)