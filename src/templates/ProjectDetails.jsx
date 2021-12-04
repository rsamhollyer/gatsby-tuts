import Img from 'gatsby-image'
import React from 'react'
import Layouts from '../components/Layouts'
import * as styles from '../styles/project-details.module.less'

export default function ProjectDetails() {
  return (
    <Layouts>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          <Img fluid />
        </div>
        <div
          className={styles.html}
          //   dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layouts>
  )
}
