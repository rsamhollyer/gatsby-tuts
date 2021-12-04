import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Nav() {
  // Note - You CANNOT use query variables with this method
  // Note 2 = You can only use this hook ONCE per component
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
