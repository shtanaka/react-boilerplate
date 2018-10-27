import React, { Component } from 'react';
import 'src/styles/app.scss';
import { Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    console.log('render home');
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends Component {
  render() {
    console.log('render about');
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <hr />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}