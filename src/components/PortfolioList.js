import React, { Component } from 'react'
import Portfolio from "./Portfolio"

class PortfolioList extends Component {
  
  static defaultProps = {
    projects: [
      {
        title: "Square One Mission",
        id: "squareone",
        description:
          "A fantastic local company, Square One LLC develops and produces sustainable products that are reusable and environmentally-friendly. When they needed a site to send their customers to, I jumped at the chance to design and develop this landing page for them using Bootstrap, a bit of JavaScript, and HTML/CSS.",
        url: "https://squareonemission.com",
      },
      {
        title: "Off the Rales Homebrewery",
        id: "offtherales",
        description:
          "In addition to web development, I am an avid homebrewer.  I built my own website to showcase my homebrewed beers.",
        url: "https://tom-raley.github.io/offtherales/",
      },
      {
        title: "Beerist",
        id: "beerist",
        description:
          "A single page beer recommendation web app that uses JavaScript to take a user input, interface with the Untappd API, and return a percentage chance of the user liking that beer.",
        url: "https://tom-raley.github.io/beerist/",
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