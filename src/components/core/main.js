import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavLink from "src/components/shared/customRouterNavlink/customRouterNavlink";
import './main.scss';

// components
import { Home } from 'src/components/core/home/home';
import { About } from 'src/components/core/about/about';

export class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div className="header">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <hr />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

