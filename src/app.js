import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import DefaultLayout from './layouts/default_layout'
import PrivateRoute from './util/PrivateRoute'
import Login from './components/login'
import Public from './components/public'
import Protected from './components/protected'


ReactDOM.render(
  <BrowserRouter>
    <DefaultLayout>
      <Route path="/login" component={Login} />
      <Route path="/public" component={Public} />
      <PrivateRoute path="/protected" component={Protected} />
    </DefaultLayout>
  </BrowserRouter>,

  document.getElementById('app-container')
);
