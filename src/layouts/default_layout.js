import React from 'react'
import Header from '../components/header'

const DefaultLayout = ({ children }) => (                       
  <div>
    <Header />
    {children}                                          
  </div>           
)

export default DefaultLayout
