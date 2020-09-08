import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

export default () => (
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
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/example">Go to /example</Link>
  </div>
)

const Example = () => (
  <div>
    <h2>Example</h2>
  </div>
)
