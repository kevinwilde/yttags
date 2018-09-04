import * as React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'
import Register from './Register'
import UserList from './UserList'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HashRouter>
          <Switch>
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/users" component={UserList} />
            <Route exact={true} path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
