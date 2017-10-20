import React from 'react';
import { Link } from 'react-router';

export class NavigationBar extends React.Component {
  render() {
    return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">
              React Summit 2017
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <div className="user-name-and-icon">
                  <a href="#">Hi, Kingdom</a>
                  <img
                    src={require(`../../assets/img/profile-pic.jpg`)}
                    className="img-circle"
                    alt="user icon"
                    height="30"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
