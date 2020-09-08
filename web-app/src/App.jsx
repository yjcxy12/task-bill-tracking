import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import store from './state/store';
import { createPayment } from './state/payments';

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/example">
          <Example />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/example">Go to /example</Link>
  </div>
);

const Example = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);

  const exampleAddPayment = () =>
    dispatch(
      createPayment({
        name: 'Hello World',
      })
    );

  return (
    <div>
      <h2>Example</h2>
      {payments.map((payment, index) => (
        <p key={index}>{payment.name}</p>
      ))}
      <button onClick={exampleAddPayment}>Add Payment</button>
    </div>
  );
};
