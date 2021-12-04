import React from 'react'
import '../styles/global.less'
import Nav from './Nav'

export default function Layouts({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>&#169; 2022</footer>
    </div>
  )
}
