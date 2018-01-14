import React from 'react';

class Protected extends React.Component {

  render() {
    return (
      <div className="custom-container">
        <h1>Protected page</h1>
        <p className="lead">
          This page is shown to authenticated users.
        </p>
      </div>
    );
  }
}

export default Protected
