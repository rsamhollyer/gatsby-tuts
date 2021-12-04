import { graphql, Link } from 'gatsby'
import React from 'react'
import Layouts from '../../components/Layouts'
import OneProject from '../../components/OneProject'
import * as styles from '../../styles/project.module.less'

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const { contact } = data.contact.siteMetadata

  return (
    <Layouts>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Stuff Junk and Crap</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <OneProject
                title={project.frontmatter.title}
                stack={project.frontmatter.stack}
              />
            </Link>
          ))}
        </div>
        <p>Do you like my stuff? Contact me @ {contact}</p>
      </div>
    </Layouts>
  )
}

// EXPORT PAGE QUERY
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          date
          slug
          stack
          title
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
