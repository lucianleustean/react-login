import React from 'react'

function ErrorComponent(props) {
  if (props.error.length > 0) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.error}
      </div>
    )
  } else {
    return false
  }
}

export default ErrorComponent
