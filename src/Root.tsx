import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route
} from 'react-router-dom';
import About from './pages/About';
import Index from './App';
import ReduxSagaExam from './pages/ReduxSagaExam';
// import { NotFoundPage } from './pages/NotFoundPage';

function Root() {
  return (
    <Router>
      <Route path='/' component={Index} />
      <Route exact path='/about' component={About} />
      <Route exact path='/about/redux-saga-exam' component={ReduxSagaExam} />
    </Router>
  );
}

export default Root;