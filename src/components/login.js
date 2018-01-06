import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'
import { authenticate } from '../util/AuthService'

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <h2>This is a login Page</h2>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login
