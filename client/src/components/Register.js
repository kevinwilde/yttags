import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import * as auth from '../api/auth';

class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    onSubmit = e => {
        e.preventDefault();
        auth.register(this.state.username, this.state.password);
    }

    render() {
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
                        <button type="submit">Register</button>
                    </p>

                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </fieldset>
            </form>
        )
    }
}

export default Login