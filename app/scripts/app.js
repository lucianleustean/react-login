import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={MainPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('app-container')
);
