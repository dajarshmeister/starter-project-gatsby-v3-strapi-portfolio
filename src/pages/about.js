import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data }) => {
  const {
    strapiAbout: {
      title,
      info,
      stack,
      image: {
        localFile: { publicURL },
      },
    },
  } = data
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={publicURL} alt={title} className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                const { id, title } = item
                return <span key={id}>{title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      stack {
        title
        id
      }
      info
      image {
        id
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
