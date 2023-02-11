import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  return (
    <>
      <Header unReadMessages={props.unReadMessages} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
