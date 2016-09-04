import {fetchOrders, createOrder, fetchOrder, deleteOrder, editOrder} from './order_CRUD';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const FETCH_ORDER = 'FETCH_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const EDIT_ORDER = 'EDIT_ORDER';

// const port = !!window.location.port ? ':' + window.location.port : null;
// export const ROOT_URL = `${window.location.protocol}//${window.location.hostname}${port}/api`;
const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = ':8080';
const apiPrefix = ''; // '/api';
export const ROOT_URL = `${protocol}//${hostname}${port}${apiPrefix}`;

export const API_KEY = '';

export {
  fetchOrders, createOrder, fetchOrder, deleteOrder, editOrder
}
