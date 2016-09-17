import {
  combineReducers
} from 'redux'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions'

const localToken = localStorage.getItem('feathers-jwt');
const init = {
  isFetching: false,
  isAuthenticated: localToken ? true : false,
  token: localToken
}

export default function (state = init, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state,
        ...action.payload
      };
    case LOGIN_SUCCESS:
      return {...state,
        ...action.payload
      };
    case LOGIN_FAILURE:
      return {...state,
        ...action.payload
      };

    default:
      return state
  }
}
