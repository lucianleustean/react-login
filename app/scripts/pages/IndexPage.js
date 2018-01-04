import React from 'react';
import { Link } from 'react-router-dom';
 
export default class is extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Welcome!</h2>
        <hr />
        <div className="jumbotron">
          <p>
            <strong>To my React application!</strong>
          </p>
          <p>Ready to begin? Try these Stormpath features that are included in this example:</p>
          <ol className="lead">
            <li><Link to="/register">Registration</Link></li>
            <li><Link to="/profile">Custom Profile Data</Link></li>
          </ol>
        </div>
      </div>
    );
  }
}
