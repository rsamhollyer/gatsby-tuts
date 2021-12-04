import { graphql, Link } from 'gatsby'
import React from 'react'
import Layouts from '../components/Layouts'
import * as styles from '../styles/home.module.less'

export default function Home() {
  // const { title, description } = data.site.siteMetadata
  return (
    <Layouts>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full Stack Dev in Houston</p>
          <Link className={styles.btn} to="/projects">
            My Portfolios
          </Link>
        </div>
        <img src="/banner.png" alt="banner" />
        {/* <p>
          {title} - {description}
        </p> */}
      </section>
    </Layouts>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      host
      port
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`
