import React, { Component } from 'react'

const beeristImg = require('../dist/images/beerist.png')
const beeristWebp = require('../dist/images/beerist.webp')
const beeristMobile = require('../dist/images/beerist-mobile.png')
const offTheRalesImg = require('../dist/images/offtherales.png')
const offTheRalesWebp = require('../dist/images/offtherales.webp')
const offTheRalesMobile = require('../dist/images/offtherales-mobile.png')
const squareOneImg = require('../dist/images/squareone.png')
const squareOneWebp = require('../dist/images/squareone.webp')
const squareOneMobile = require('../dist/images/squareone-mobile.png')


class Portfolio extends Component {
  render() {
    return <div className="portfolio" id="portfolio">
      <h1 className="portfolio-header" data-aos="fade" data-aos-duration="1000" >Portfolio</h1>
      <div className="container anchor-padding" id="squareone">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <picture data-aos="fade-right" data-aos-duration="2000">
                <source className="card-img-top" srcSet={squareOneWebp} />
                <source className="card-img-top" media="(min-width: 780px)" srcSet={squareOneMobile} />
                <img className="card-img-top" src={squareOneImg} alt="Square One screenshot" />
              </picture>
              <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                <h5 className="card-title">Square One Mission</h5>
                <p className="card-text">A fantastic local company, Square One LLC develops and produces sustainable products that are reusable and environmentally-friendly. When they needed a site to send their customers to, I jumped at the chance to design and develop this landing page for them using Bootstrap, a bit of JavaScript, and HTML/CSS.</p>
                <a href="https://squareonemission.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container anchor-padding" id="offtherales">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <picture data-aos="fade-right" data-aos-duration="2000">
                <source className="card-img-top" srcSet={offTheRalesWebp} />
                <source className="card-img-top" media="(min-width: 780px)" srcSet={offTheRalesMobile} />
                <img className="card-img-top" src={offTheRalesImg} alt="Off the rales screenshot" />
              </picture>
              <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                <h5 className="card-title">Off the Rales Homebrewery</h5>
                <p className="card-text">In addition to web development, I am an avid homebrewer.  I built my own website to showcase my homebrewed beers.</p>
                <a href="https://tom-raley.github.io/offtherales/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container anchor-padding" id="beerist">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card" >
                <picture  data-aos="fade-right" data-aos-duration="2000">
                  <source className="card-img-top" srcSet={beeristWebp} />
                  <source className="card-img-top" media="(min-width: 780px)" srcSet={beeristMobile} />
                  <img className="card-img-top" src={beeristImg} alt="Beerist screenshot" />
                </picture>
                <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                  <h5 className="card-title">Beerist</h5>
                  <p className="card-text">A single page beer recommendation web app that uses JavaScript to take a user input, interface with the Untappd API, and return a percentage chance of the user liking that beer.</p>
                  <a href="https://tom-raley.github.io/beerist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color">Visit Site</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Portfolio