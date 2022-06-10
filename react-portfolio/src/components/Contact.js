import React, { Component } from "react"
import Section from "./Section"
import "../styles/Contact.css"

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Section h2="Contact" p="" />
        <div className="contact-block">
          <a
            href="https://www.linkedin.com/in/rayvon-gregory/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://portfolium.com/RayvonGregory"
            target="_blank"
            rel="noreferrer"
          >
            Portfolium
          </a>
          <p>rayvongregory@gmail.com</p>
        </div>
      </>
    )
  }
}

export default Contact
