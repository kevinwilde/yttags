import * as React from 'react'
import { Link } from 'react-router-dom'
import * as auth from '../api/auth'

class Login extends React.Component {
  public state = {
    password: "",
    username: "",
  }

  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Login</legend>
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text" id="username"
              onChange={e => this.setState({username: e.target.value})} />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password"
              onChange={e => this.setState({password: e.target.value})} />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </fieldset>
      </form>
    )
  }

  private onSubmit = (e: any) => {
    e.preventDefault()
    auth.login(this.state.username, this.state.password)
  }
}

export default Login
