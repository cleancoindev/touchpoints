import React, { Component } from 'react';

import './App.css';

import { Route, Link } from 'react-router-dom';

import ProfileContainer from './ProfileContainer';
import DemonstrationContainer from './DemonstrationContainer';
import ReflectionContainer from './ReflectionContainer.js';
import ReflectionDetailContainer from './ReflectionDetailContainer.js';
import TestingContainer from './TestingContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TOUCHPOINT</header>
        <div className="container">
          <div className="spinner transition500" />
          <div className="error transition500" />
          <div id="content">
            <div className="wrapper">
              <Route path="/profile" exact component={ProfileContainer} />
              <Route path="/reflection" exact component={ReflectionContainer} />
              <Route
                path="/reflection-detail"
                exact
                component={ReflectionDetailContainer}
              />
              <Route path="/" exact component={DemonstrationContainer} />
              <Route path="/testing" exact component={TestingContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
