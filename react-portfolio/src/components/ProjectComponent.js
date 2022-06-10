import React, { Component } from "react"

class ProjectComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Spring Boot REST API" />
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <a href={this.props.git_repo} target="_blank" rel="noreferrer">
          <img src="/images/github.png" alt="Git Repo" />
        </a>
      </div>
    )
  }
}

export default ProjectComponent
