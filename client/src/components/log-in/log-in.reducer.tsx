import ACTION_TYPES from './log-in.action-types';

// MODELS
import { Action } from 'redux';
import { AppState } from '../../App.models';

const initialState = {};

const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
