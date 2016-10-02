import { 
	FETCH_SCHEDULE
} from '../actions';

const INIT_STATE = {
	all: []
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_SCHEDULE]: (state, action) => ({ ...state, all: action.payload.data })
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function ( state = INIT_STATE, action ) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}