import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from './Login'
import NotFound from './NotFound'
import Register from './Register'
import UserList from './UserList'

import logo from '../logo.svg'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/users" component={UserList} />
            <Route exact={true} path="/" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
