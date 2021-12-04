import Img from 'gatsby-image'
import React from 'react'

export default function OneProject({ title, stack, fluid }) {
  return (
    <div>
      <Img fluid={fluid} />
      <h3>{title}</h3>
      <p>{stack}</p>
    </div>
  )
}
