import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import loadable from 'loadable-components';
import "./Assets/PortalTheme.css";

const Loading = () => <div>Loading...</div>;

const DefaultLayout = loadable(() => import('./Containers'), {
  LoadingComponent: Loading,
});

class App extends Component {
  render() {
    return (
      <main style={{ marginTop: '56px' }}>
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

export default App;
