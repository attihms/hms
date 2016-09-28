import { signup, login } from './security';
import {
  fetchOrders,
  createOrder,
  fetchOrder,
  deleteOrder,
  editOrder,
  clearOrder
} from './order_CRUD';
import {
  fetchRooms,
  createRoom,
  fetchRoom,
  deleteRoom,
  editRoom,
  clearRoom
} from './room_CRUD';

// const port = !!window.location.port ? ':' + window.location.port : null;
// export const ROOT_URL = `${window.location.protocol}//${window.location.hostname}${port}/api`;
const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = ':3030';
const apiPrefix = ''; // '/api';
export const ROOT_URL = `${protocol}//${hostname}${port}${apiPrefix}`;

export const API_KEY = '';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const CREATE_ORDER = 'CREATE_ORDER';
export const FETCH_ORDER = 'FETCH_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const EDIT_ORDER = 'EDIT_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const FETCH_ROOMS = 'FETCH_ROOMS';
export const CREATE_ROOM = 'CREATE_ROOM';
export const FETCH_ROOM = 'FETCH_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';
export const EDIT_ROOM = 'EDIT_ROOM';
export const CLEAR_ROOM = 'CLEAR_ROOM';

export {
  signup, login,
  fetchOrders, createOrder, fetchOrder, deleteOrder, editOrder, clearOrder,
  fetchRooms, createRoom, fetchRoom, deleteRoom, editRoom, clearRoom
}
