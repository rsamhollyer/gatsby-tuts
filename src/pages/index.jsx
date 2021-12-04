import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layouts from '../components/Layouts'
import * as styles from '../styles/home.module.less'

export default function Home({ data }) {
  const { fluid } = data.file.childrenImageSharp[0]
  console.log(data)
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
        <Img fluid={fluid} />
      </section>
    </Layouts>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
