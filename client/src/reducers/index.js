import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import Auth from './reducer_security';
import OrderReducer from './reducer_orders';
import RoomReducer from './reducer_rooms';

const rootReducer = combineReducers({
    auth: Auth,
    form: formReducer,
    orders: OrderReducer,
    rooms: RoomReducer,
});

export default rootReducer;
