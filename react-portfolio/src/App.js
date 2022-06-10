import Header from "./components/Header"
import Bio from "./components/Bio"
import GenSparkProjects from "./components/GenSparkProjects.js"
import GenSparkCodingAssessments from "./components/GenSparkCodingAssessments.js"
import Contact from "./components/Contact.js"
import { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
        <GenSparkProjects />
        <GenSparkCodingAssessments />
        <Contact />
      </div>
    )
  }
}

export default App
