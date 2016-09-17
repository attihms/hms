import { combineReducers } from 'redux';
import Auth from './reducer_security';
import OrdertReducer from './reducer_orders';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: Auth,
    orders: OrdertReducer,
    form: formReducer
});

export default rootReducer;
