import {
  combineReducers
} from 'redux'
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
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
    case REGISTER_SUCCESS:
      return {...state,
        ...action.payload
      };
    case REGISTER_FAILURE:
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
