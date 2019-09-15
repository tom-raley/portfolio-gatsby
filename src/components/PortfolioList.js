import React, { Component } from 'react'
import Portfolio from "./Portfolio"

class PortfolioList extends Component {
  
  static defaultProps = {
    projects: [
      {
        title: "Square One Mission",
        id: "squareone",
        description:
          "A fantastic local company, Square One LLC develops and produces sustainable products that are reusable and environmentally-friendly. When they needed a site to send their customers to, I jumped at the chance to design and develop this landing page for them using React and Gatsby.",
        url: "https://heuristic-visvesvaraya-088d5a.netlify.com/",
        github: "https://github.com/tom-raley/squareone-gatsby",
        target: "_blank"
      },
      {
        title: "Portfolio",
        id: "portfolio",
        description:
          "This is the site you are currently viewing. It is built using Gatsby and React and has been a place for me to trial new technologies, techniques and models, as well as get my thoughts into the world with my Blog to hopefully share useful tips with other devs. It's one of the projects I'm most proud of as it keeps changing as my skills grow!",
        url: "/#home",
        github: "https://github.com/tom-raley/portfolio-gatsby",
        target: ""
      },
      {
        title: "Beerist",
        id: "beerist",
        description:
          "A single page beer recommendation web app that uses JavaScript to take a user input, interface with the Untappd API, and return a percentage chance of the user liking that beer.",
        url: "https://tom-raley.github.io/beerist/",
        github: "https://github.com/tom-raley/beerist",
        target: "_blank"
      },
    ],
  }

  render() {
    const photos = this.props.photos
    const fluid = Object.keys(photos).map(function (key) {
      return photos[key].childImageSharp.fluid
    })
    const projects = this.props.projects.map((r, index) => (
      <Portfolio key={index} {...r} fluid={fluid[index]}/>
    ))
    return (
      <div className="portfolio" id="portfolio">
        <h1
          className="portfolio-header"
          data-aos="fade"
          data-aos-duration="1000"
        >
          Portfolio
        </h1>
        {projects}
      </div>
    )
  }
}

export default PortfolioList;
