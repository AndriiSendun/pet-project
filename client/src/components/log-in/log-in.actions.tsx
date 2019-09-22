import ACTION_TYPES from './log-in.action-types';

// MODELS
import { AuthorizationData } from './log-in.models';
import { ActionCreator, AnyAction } from 'redux';

const logIn: ActionCreator<AnyAction> = (data: AuthorizationData) => ({ type: ACTION_TYPES.LOG_IN, payload: data });

export default {
  logIn
}
