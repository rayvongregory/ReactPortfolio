import React, { Component } from "react"
import Section from "./Section"
import ProjectComponent from "./ProjectComponent"
import GenSparkProjectInfo from "../project_info"
import "../styles/GenSparkProjects.css"

class GenSparkProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Section
          h2="GenSpark Projects"
          p="Here you can find all projects I've completed at GenSpark."
        />
        <div className="projects-container">
          {GenSparkProjectInfo.map((ob, key) => {
            return (
              <ProjectComponent
                key={key}
                image={ob.image}
                title={ob.title}
                description={ob.description}
                git_repo={ob.git_repo}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default GenSparkProjects
