import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import IndexPage from './pages/IndexPage'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" component={MainPage}/>
      <Route exact path="/" component={IndexPage}/>
    </div>
  </BrowserRouter>,
  document.getElementById('app-container')
);
