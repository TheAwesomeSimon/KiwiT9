import React from 'react';
import Home from './Components/Home';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return(
      <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
        </Switch>
    )
  }
}