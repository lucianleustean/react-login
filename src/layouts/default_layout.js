import React from 'react'
import Header from '../components/header'

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <div className="container">
      {children}
    </div>
  </div>
)

export default DefaultLayout
