import React, { Component } from "react"
import CodingAssessmentComponent from "./CodingAssessmentComponent"
import GenSparkCodingAssessmentInfo from "../coursework-info/coding_assessment_info"
import Section from "./Section"
import "../styles/GenSparkCodingAssessments.css"

class GenSparkCodingAssessments extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Section
          h2="GenSpark Coding Assessments"
          p="Here you can find all coding assessments I've done at GenSpark."
        />
        <div className="coding-assessments-container">
          {GenSparkCodingAssessmentInfo.map((ob, key) => {
            return (
              <CodingAssessmentComponent
                key={key}
                iframe_code={ob.iframe_code}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default GenSparkCodingAssessments
