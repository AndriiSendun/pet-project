import React from 'react';
import { Provider } from "react-redux";
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';

// COMPONENTS
import { LogIn } from './components/log-in';

// STYLES
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path='/' render={() => <LogIn />} />
        </ConnectedRouter>
      </Provider>
    </div>
  );
};

export default App;
