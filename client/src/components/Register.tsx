import * as React from 'react'
import { Link } from 'react-router-dom'
import * as auth from '../api/auth'

class Login extends React.Component {
  public state = {
    password: '',
    username: '',
  }

  public render() {
    // if (this.props.isAuthenticated) {
    //     return <Redirect to="/" />
    // }
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Register</legend>
          {/* {this.props.errors.length > 0 && (
            <ul>
              {this.props.errors.map(error => (
                <li key={error.field}>{error.message}</li>
              ))}
            </ul>
          )} */}
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
            <button type="submit">Register</button>
          </p>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </fieldset>
      </form>
    )
  }

  private onSubmit = (e: any) => {
    e.preventDefault()
    auth.register(this.state.username, this.state.password)
  }
}

export default Login
