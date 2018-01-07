import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'
import { authenticateUser, isAuthenticated } from '../util/AuthService'
import ErrorComponent from './error'

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    errorMessage: ''
  }

  handleSubmit(event) {
    event.preventDefault();

    var username = document.getElementById("inputUsername").value
    var password = document.getElementById("inputPassword").value

    if (username && password) {
      authenticateUser(username, password)
        .then(res => {
          this.setState({ redirectToReferrer: true })
        })
        .catch(( err ) => {
          this.setState({ errorMessage: err.message })
        })
    } else {
      this.setState({ errorMessage: "Username or password empty" })
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    var fromError = "You must log in to view the page at " + from.pathname

    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    return (
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please sign in</h2>
          <ErrorComponent error={fromError} />
          <ErrorComponent error={this.state.errorMessage} />
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="string" id="inputUsername" className="form-control" placeholder="Username" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Sign in</button>
        </form>
      </div>
    )
  }
}

export default Login
