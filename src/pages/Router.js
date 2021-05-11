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
        <Route path="/timeline" component={Timeline} exact></Route>
        <Route path="/findUsers" component={FindUsers} exact></Route>
        <PrivateRoute path="/" component={Wall}></PrivateRoute>
        <Route path="*" render={() => <Redirect path="/" />}></Route>
      </Switch>
    </Router>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authToken") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
    )  }
