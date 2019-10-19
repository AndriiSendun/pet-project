import ACTION_TYPES from './log-in.action-types';

// MODELS
import { AuthorizationData, LogInAction } from './log-in.models';
import { ActionCreator } from 'redux';

const logIn: ActionCreator<LogInAction> = (data: AuthorizationData) => ({ type: ACTION_TYPES.LOG_IN, payload: data });

export default {
  logIn,
};
