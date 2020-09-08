import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';

const createRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/add">
      <Add />
    </Route>
    <Route path="*">
      <h1>404 page</h1>
    </Route>
  </Switch>
);

export default createRoutes;
