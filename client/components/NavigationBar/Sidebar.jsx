import React from 'react';
import { Link } from 'react-router';

export const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation" className="active">
          <Link to="/declarative"><i className="glyphicon glyphicon-cog" />
            <span className="nav-item">Declarative</span>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/component-based"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">Component Based</span>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/lowa"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">LOWA</span>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/graphql-example"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">GraphQL</span>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/apollo"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">GraphQL + Apollo</span>
          </Link>
        </li>
        <li role="presentation">
          <Link to="/apollo-example"><i className="glyphicon glyphicon-cog not-active" />
            <span className="nav-item not-active">Demo</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
