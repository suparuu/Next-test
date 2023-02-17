import React from 'react'
import handler from '../api/hello'

const Layout = ({children}) => {
  return (
    <>
    <header></header>
    {children}
    <footer></footer>
    </>
  )
}

export default Layout