import React from 'react'

export default function OneProject({ title, stack }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{stack}</p>
    </div>
  )
}
