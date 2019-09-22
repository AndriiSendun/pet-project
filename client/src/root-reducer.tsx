import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import { reducer as logInReducer } from './components/log-in';

export default (history: any) => combineReducers({
  logInReducer,
  form: formReducer,
  router: connectRouter(history),
})
