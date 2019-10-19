import ACTION_TYPES from './log-in.action-types';

// MODELS
import { AnyAction } from 'redux';
import { AppState } from '../../App.models';
import { LogInReducer } from './log-in.models';

const initialState: LogInReducer = {
  user: null,
  error: null,
};

const reducer = (state: AppState = initialState, action: AnyAction): AppState => {
  switch(action.type) {
    case ACTION_TYPES.LOG_IN_SUCCESS:
      return {
        user: action.payload,
        error: null,
      }
    case ACTION_TYPES.LOG_IN_FAIL:
      return {
        user: null,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
