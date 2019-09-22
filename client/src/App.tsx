import React from 'react';
import { Provider } from "react-redux";

import { store } from './store';

// COMPONENTS
import { LogIn } from './components/log-in';

// STYLES
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <LogIn />
      </Provider>
    </div>
  );
}

export default App;
