import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Category } from '../pages/Category';

import { Dashboard } from '../pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/category" component={Category} />
      </Switch>
    </BrowserRouter>
  );
}
