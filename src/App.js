import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import './App.css';
import Index from './pages/Index';

const App = () => (
  <Provider store={store}>
    <Index />
  </Provider>
);

export default App;
