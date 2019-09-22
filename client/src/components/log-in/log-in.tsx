import React from 'react';
import { reduxForm, Field } from 'redux-form';

// COMPONENTS

import { FORM_NAMES } from '../../common/constants';

const LogIn: React.FC = (): JSX.Element => {
  return (
    <form className="log-in">
      <Field
        component="input"
        name="email"
      />
      <Field
        component="input"
        name="password"
      />
      this is log in component
    </form>
  )
}

export default reduxForm({
  form: FORM_NAMES.LOG_IN
})(LogIn);

