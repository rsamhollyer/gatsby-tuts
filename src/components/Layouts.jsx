import React from 'react'
import Nav from './Nav'

export default function Layouts({ children }) {
  return (
    <div className="layouts">
      <Nav />
      <div className="content">{children}</div>
      <footer>&copy</footer>
    </div>
  )
}
