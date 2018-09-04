import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'
import * as auth from '../api/auth'

interface State {
  username: string
  password: string
  isLoggedIn: boolean
}

class Login extends React.Component<{}, State> {
  public state = {
    username: '',
    password: '',
    isLoggedIn: auth.isLoggedIn(),
  }

  public render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />
    }
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Login</legend>
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
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

  private onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await auth.login(this.state.username, this.state.password)
    this.setState({ isLoggedIn: auth.isLoggedIn() })
  }
}

export default Login
