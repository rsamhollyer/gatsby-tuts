import React from 'react'
import '../styles/global.less'
import Nav from './Nav'

export default function Layouts({ children }) {
  return (
    <div className="layout">
      <Nav />
      <div className="content">{children}</div>
      <footer>
        <p>From the Desk of Sam Hollyer and the Youtube hive mind &#169;2022</p>
      </footer>
    </div>
  )
}
