import React, { Component } from "react"

class CodingAssessmentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div className="iframe-container">{this.props.iframe_code}</div>
  }
}

export default CodingAssessmentComponent
