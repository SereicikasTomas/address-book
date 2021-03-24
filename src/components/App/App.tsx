import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../List';
import Settings from '../Settings';

function App(): JSX.Element {
  return (
    <Fragment>
      <Switch>
        <Route component={List} exact path="/" />
        <Route component={Settings} exact path="/settings" />
      </Switch>
    </Fragment>
  );
}

export default App;
