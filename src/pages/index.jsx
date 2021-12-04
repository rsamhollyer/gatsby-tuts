import { Link } from 'gatsby'
import React from 'react'
import Layouts from '../components/Layouts'
import * as styles from '../styles/home.module.less'

console.log(styles)
export default function Home() {
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
      </section>
    </Layouts>
  )
}
