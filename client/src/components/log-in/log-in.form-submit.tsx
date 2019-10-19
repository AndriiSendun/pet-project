import { Dispatch } from 'redux';
import { LogInForm, LogInProps } from './log-in.models';

import actions from './log-in.actions';

export const onSubmit = (formValues: LogInForm, dispatch:Dispatch, props: LogInProps): void => {
  dispatch(actions.logIn(formValues));
}
