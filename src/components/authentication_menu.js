import React from 'react';
import { getUsername, isAuthenticated } from '../util/AuthService'

function UserGreeting(props) {
  const username = getUsername();

  return (
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <span className="nav-link"> Hello {username}!</span>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  )
}

function GuestGreeting(props) {
  return (
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/register">Register now</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
    </ul>
  )
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class AuthenticationMenu extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse justify-content-end">
        <Greeting isLoggedIn={isAuthenticated()} />
      </div>
    )
  }
}

export default AuthenticationMenu
