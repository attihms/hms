import axios from 'axios';
import {
  ROOT_URL, API_KEY, 
  FETCH_ORDERS, CREATE_ORDER, FETCH_ORDER, DELETE_ORDER, EDIT_ORDER, CLEAR_ORDER
} from './';

export function fetchOrders() {

  const request = axios.get(`${ROOT_URL}/reservations${API_KEY}`);

  return {
    type: FETCH_ORDERS,
    payload: request
  }
}

export function fetchOrder(id) {

  const request = axios.get(`${ROOT_URL}/reservation/${id}${API_KEY}`);

  return {
    type: FETCH_ORDER,
    payload: request
  }
}

export function createOrder(props) {

  const request = axios.post(`${ROOT_URL}/reservations${API_KEY}`, props);

  return {
    type: CREATE_ORDER,
    payload: request
  }
}

export function editOrder(id, props) {

  const request = axios.put(`${ROOT_URL}/reservations/${id}${API_KEY}`, props);

  return {
    type: EDIT_ORDER,
    payload: request
  }
}

export function deleteOrder(id) {

  const request = axios.delete(`${ROOT_URL}/reservations/${id}${API_KEY}`);

  return {
    type: DELETE_ORDER,
    payload: request
  }
}

export function clearOrder(id) {
  return {
    type: CLEAR_ORDER
  }
}