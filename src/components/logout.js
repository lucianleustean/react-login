import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { logout } from '../util/AuthService'

class Logout extends React.Component {
  componentDidMount(){
    logout();
  }

  render() {
    return (
      <Redirect to={"/public"}/>
    );
  }
}

export default Logout
