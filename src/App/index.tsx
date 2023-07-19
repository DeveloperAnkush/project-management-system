import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import RouterGate from "../router"

const App = () => {
  return (
    <Provider store={store}>
      <RouterGate />
    </Provider>
  );
}

export default App;
