import React from 'react';
import { reduxForm, Field, submit } from 'redux-form';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// COMPONENTS
import { FORM_NAMES } from '../../common/constants';

// HELPER FUNCTION
import { onSubmit } from './log-in.form-submit';

// MODELS
import { MapDispatchToPropsModel, LogInProps } from './log-in.models';

const LogIn: React.FC<LogInProps> = (props): JSX.Element => {
  const { submitForm } = props;

  return (
    <>
      <form className="log-in">
        <Field
          component="input"
          name="email"
        />
        <Field
          component="input"
          name="password"
        />
      </form>

      <button
        onClick={submitForm}
      >
        Log in
      </button>
    </>
  )
}

const LogInReduxForm = reduxForm({
  form: FORM_NAMES.LOG_IN,
  onSubmit,
})(LogIn);

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsModel => ({
  submitForm() {
    dispatch(submit(FORM_NAMES.LOG_IN));
  },
});

export default connect<null, MapDispatchToPropsModel>(
  null,
  mapDispatchToProps,
)(LogInReduxForm);

