import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { ApolloProvider, ApolloClient } from 'react-apollo';
import routes from './routes/Routes';
import './assets/styles/styles.css';

// create an instance of apollo client
const client = new ApolloClient();

render(
  <ApolloProvider client={client}>
    <Router history={browserHistory} routes={routes} />
  </ApolloProvider>,
  document.getElementById('app')
);
