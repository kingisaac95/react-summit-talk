import React, {Component} from 'react';

export class Declarative extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    return (
      <div className="cb">
        <div className="row">
          <h2 className="searchTerm">Declarative</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple views for
            each state in your application, and React will efficiently update and render
            just the right components when your data changes. - reactjs.org
          </p>

          <h4>Example of managing data change with React State</h4>

          <div className="row">
            <form className="navbar-form navbar-left">
              <div className="form-group has-feedback">
                <input type="text" className="form-control search" placeholder="Search" onChange={this.onSearch} />
                <span className="glyphicon glyphicon-search form-control-feedback" />
              </div>
            </form>
          </div>

          <h4>You are searching for <span className="searchTerm">{this.state.searchTerm}</span></h4>
        </div>
      </div>
    );
  }
}
