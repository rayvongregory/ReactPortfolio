import React, { Component } from "react"
import "../styles/Section.css"

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section>
        <div className="h2-container">
          <h2>{this.props.h2}</h2>
        </div>
        <p>{this.props.p}</p>
      </section>
    )
  }
}

export default Section
