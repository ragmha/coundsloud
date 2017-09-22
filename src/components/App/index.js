import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Callback from '../Callback/';
import Stream from '../Stream/';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={'/'} component={Stream} />
          <Route exact path={'/callback'} component={Callback} />
        </Switch>
      </div>
    );
  }
}

export default App;
