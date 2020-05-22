import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './pages/About';
import Index from './App';

function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default Root;