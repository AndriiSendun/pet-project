import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory, History } from "history";

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const initialState = {};
const history: History = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware]

const store = createStore(
  rootReducer(history),
  initialState,
  compose(applyMiddleware(...middleware), composeWithDevTools())
);

sagaMiddleware.run(rootSaga);

export {
  store,
  history,
}
