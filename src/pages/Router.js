import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Login, Wall } from '../pages/index';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/wall" component={Wall}></Route>
        <Route path="*" render={() => <Redirect path="/" />}></Route>
      </Switch>
    </Router>
  )
}
