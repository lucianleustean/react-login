import React from 'react';

class Public extends React.Component {

  render() {
    return (
      <div className="custom-container">
        <h1>Public page</h1>
        <p className="lead">
          This page is shown to all users.
        </p>
      </div>
    );
  }
}

export default Public
