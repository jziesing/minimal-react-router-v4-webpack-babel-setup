import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import About from './about';
import Login from './login';

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/about">About</Link>
        {' '}
        <Link to="/">Login</Link>
        {' '}
        <strong>react-router-dom-example</strong>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
