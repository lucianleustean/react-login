import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import DefaultLayout from './layouts/default_layout'
import PrivateRoute from './util/PrivateRoute'
import Login from './components/login'

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

ReactDOM.render(
  <BrowserRouter>
    <DefaultLayout>
      <Route path="/login" component={Login} />
      <Route path="/a" component={Public} />
      <PrivateRoute path="/b" component={Protected} />
    </DefaultLayout>
  </BrowserRouter>,

  document.getElementById('app-container')
);
