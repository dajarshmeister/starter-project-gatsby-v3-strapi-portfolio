import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/Seo"

const Project = ({ data }) => {
  const {
    project: { title, description },
  } = data
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getProject($title: String) {
    project: strapiProject(title: { eq: $title }) {
      title
      description
    }
  }
`

export default Project
