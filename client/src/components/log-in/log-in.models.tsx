import ACTION_TYPES from './log-in.action-types';

export interface AuthorizationData {
  email: string,
  password: string,
}

export interface LogInForm {
  email: string,
  password: string,
}

export interface LogInProps {

}

export interface User {
  email: string,
  password: string,
}

export interface MapDispatchToPropsModel {
  submitForm: () => void
}

export interface LogInProps extends MapDispatchToPropsModel {

}

export interface LogInAction {
  type: String,
  payload: AuthorizationData,
}
