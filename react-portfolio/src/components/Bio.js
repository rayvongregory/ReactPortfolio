import React, { Component } from "react"
import Section from "./Section"

class Bio extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Section
        h2="About Me"
        p="I am a Full Stack Developer with over a year of experience creating
        responsive MERN applications. I graduated from the University of North 
        Carolina at Chapel Hill in 2018 where I learned the basics of programming 
        and Object-Oriented Programming in Java. I am currently working through a 
        12-week Full Stack Java course through GenSpark. Upon completion of this
        program, I will have the skills needed to build and scale
        enterprise-level applications using Spring Boot and React."
      />
    )
  }
}
export default Bio
