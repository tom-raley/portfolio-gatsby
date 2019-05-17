import React, { Component } from 'react'
import Portfolio from "./Portfolio"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Img from "gatsby-image"

const beeristImg = require('../dist/images/beerist.png')
//const beeristWebp = require('../dist/images/beerist.webp')
const offTheRalesImg = require('../dist/images/offtherales.png')
//const offTheRalesWebp = require('../dist/images/offtherales.webp')
const squareOneImg = require('../dist/images/squareone.png')
//const squareOneWebp = require('../dist/images/squareone.webp')

class PortfolioList extends Component {
  static defaultProps = {
    projects: [
      {
        title: "Square One Mission",
        id: "squareone",
        img: "squareone.png",
        description: "A fantastic local company, Square One LLC develops and produces sustainable products that are reusable and environmentally-friendly. When they needed a site to send their customers to, I jumped at the chance to design and develop this landing page for them using Bootstrap, a bit of JavaScript, and HTML/CSS.",
        url: "https://squareonemission.com"
      },
      {
        title: "Off the Rales Homebrewery",
        id: "offtherales",
        img: "offtherales.png",
        description: "In addition to web development, I am an avid homebrewer.  I built my own website to showcase my homebrewed beers.",
        url: "https://tom-raley.github.io/offtherales/"
      },
      {
        title: "Beerist",
        id: "beerist",
        img: "beerist.png",
        description: "A single page beer recommendation web app that uses JavaScript to take a user input, interface with the Untappd API, and return a percentage chance of the user liking that beer.",
        url: "https://tom-raley.github.io/beerist/"
      }
    ]
  }

  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const projects = this.props.projects.map((r, index) => (
      <Portfolio key={index} {...r} />
    ));

    return (
      <div className = "portfolio" id="portfolio">
        <h1 className="portfolio-header" data-aos="fade" data-aos-duration="1000" >Portfolio</h1>
        {projects}
      </div>
    )
  }
}

export default PortfolioList;