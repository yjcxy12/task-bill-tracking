import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './state/store';
import createRoutes from './routes';

export default () => (
  <Provider store={store}>
    <Router>{createRoutes()}</Router>
  </Provider>
);
