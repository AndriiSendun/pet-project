import ACTION_TYPES from './log-in.action-types';

// MODELS
import { AuthorizationData, User, LogInAction } from './log-in.models';
import { ActionCreator, AnyAction, Action } from 'redux';

const logIn: ActionCreator<LogInAction> = (data: AuthorizationData) => ({ type: ACTION_TYPES.LOG_IN, payload: data });
const saveUser: ActionCreator<Action> = (user: User) => ({ type: ACTION_TYPES.SAVE_USER, payload: user });

export default {
  logIn,
  saveUser,
}
