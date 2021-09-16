import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs = () => {
  const {
    allStrapiJob: { jobs },
  } = useStaticQuery(query)
  const [value, setValue] = useState(0)
  const { company, position, date, description } = jobs[value]

  const changeJob = index => {
    setValue(index)
  }

  return (
    <>
      <section className="section jobs">
        <Title title="Experience" />
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              const { company, position, date, description } = job
              return (
                <button
                  key={index}
                  className={index === value ? "active-btn job-btn" : "job-btn"}
                  onClick={() => changeJob(index)}
                >
                  {company}
                </button>
              )
            })}
          </div>
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}</p>
            {description.map(item => {
              const { id, name } = item
              return (
                <div key={id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  {name}
                </div>
              )
            })}
          </article>
        </div>
        <Link to="/about" className="btn center-btn">
          more info
        </Link>
      </section>
      {/* {jobs.map(job => {
        const { company, position, date, description } = job
        return <p>{company}</p>
      })} */}
    </>
  )
}

const query = graphql`
  {
    allStrapiJob(sort: { order: DESC, fields: created_at }) {
      jobs: nodes {
        company
        position
        date
        description {
          name
          id
        }
      }
    }
  }
`

export default Jobs
