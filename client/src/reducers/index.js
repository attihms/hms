import { combineReducers } from 'redux';
import OrdertReducer from './reducer_orders';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  orders: OrdertReducer,
  form: formReducer
});

export default rootReducer;
