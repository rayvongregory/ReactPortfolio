import React, { Component } from "react"
import "../styles/Header.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header last-updated="Last updated: June 9, 2022">Rayvon Gregory</header>
    )
  }
}

export default Header
