import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Login, Register, Wall, Timeline, FindUsers } from '../pages/index';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/timeline" component={Timeline}></Route>
        <Route path="/findUsers" component={FindUsers}></Route>
        <Route path="/" component={Wall}></Route>
        <Route path="*" render={() => <Redirect path="/" />}></Route>
      </Switch>
    </Router>
  )
}
