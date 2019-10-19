import ACTION_TYPES from './log-in.action-types';

export interface AuthorizationData {
  email: string,
  password: string,
}

export interface LogInReducer {
  user: User | null,
  error: any,
}

export interface LogInForm {
  email: string,
  password: string,
}

export interface LogInProps {

}

export interface User {
  _id: string,
  email: string,
  password: string,
  __v: number,
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
