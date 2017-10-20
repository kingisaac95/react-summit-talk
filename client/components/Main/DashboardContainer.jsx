import React, { Component } from 'react';
import { Route } from 'react-router';
import { NavigationBar } from '../NavigationBar/NavigationBar.jsx';
import { Sidebar } from '../NavigationBar/Sidebar.jsx';
import { Declarative } from '../Pages/Declarative.jsx';
import { ComponentBased } from '../Pages/ComponentBased.jsx';
import { Lowa } from '../Pages/Lowa.jsx';
import { GraphQL } from '../Pages/GraphQL.jsx';
import { Apollo } from '../Pages/Apollo.jsx';
import ApolloExample from '../Pages/ApolloExample.jsx';

export default class Dashboard extends Component {
  render() {
    const currentPath = window.location.pathname;
    return (
      <div className="dashboard">
        <NavigationBar />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              {
                currentPath === '/declarative' ? <Declarative /> : null
              }
              {
                currentPath === '/component-based' ? <ComponentBased /> : null
              }
              {
                currentPath === '/lowa' ? <Lowa /> : null
              }
              {
                currentPath === '/graphql-example' ? <GraphQL /> : null
              }
              {
                currentPath === '/apollo' ? <Apollo /> : null
              }
              {
                currentPath === '/apollo-example' || currentPath === '/' ? <ApolloExample /> : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
