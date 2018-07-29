import React, { Component } from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HashRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
