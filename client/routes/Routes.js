import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App.jsx';
import DashboardContainer from '../components/Main/DashboardContainer.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardContainer}/>
    <Route path="/declarative" component={DashboardContainer} />
    <Route path="/component-based" component={DashboardContainer} />
    <Route path="/lowa" component={DashboardContainer} />
    <Route path="/graphql-example" component={DashboardContainer} />
    <Route path="/apollo" component={DashboardContainer} />
    <Route path="/apollo-example" component={DashboardContainer} />
  </Route>
);
