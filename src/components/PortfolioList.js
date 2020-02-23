import React, { Component } from 'react'
import Portfolio from "./Portfolio"

class PortfolioList extends Component {
  render() {
    const { edges: projects } = this.props.data
    
    const project = projects.map((r, index) => (
      <Portfolio key={index} {...r} />
    ))
    return (
      <div className="portfolio overflow-hidden" id="portfolio">
        <h1
          className="portfolio-header"
          data-aos="fade"
          data-aos-duration="1000"
        >
          Portfolio
        </h1>
        {project}
      </div>
    )
  }
}

export default PortfolioList;
