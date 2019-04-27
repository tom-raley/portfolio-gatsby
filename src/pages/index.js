import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const beeristImg = require('../dist/images/beerist.png')
const offTheRalesImg = require('../dist/images/offtherales.png')
const profilePicImg = require('../dist/images/profile_pic.jpg')
const squareOneImg = require('../dist/images/squareone.png')

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="jumbotron jumbotron-fluid" id="home">
        <div className="container">
          <img className="img-fluid" src={ profilePicImg } alt="photo of tom" />
          <h1 className="display-4">Hi, I'm Tom.</h1>
          <p className="lead">I'm passionate about solving problems and creating beautiful, functional solutions. </p>
          <p className="lead">My tools are HTML, CSS and JavaScript.</p>
        </div>
      </div>

      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" id="nav">
      <a className="navbar-brand" id="home-button" href="#home">tom<span className="name-color">raley</span></a>
      <button className="hamburger hamburger--spin navbar-toggler collapsed" id="mobile-nav-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#about">About
                            <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Portfolio
                        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item nav-link" href="#squareone">Square One Mission</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item nav-link" href="#offtherales">Off The Rales Brewing Co.</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item nav-link" href="#beerist">Beerist</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" role="button">Contact</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank"></a>
          </li>
        </ul>
      </div>
    </nav>

        <div className="container anchor-padding" id="about">
      <div className="row">
        <div className="about">
          <h1 data-aos="fade-right" data-aos-duration="2000">About</h1>
          <p className="lead" data-aos="fade-up" data-aos-duration="2000">I'm <span className="name-color">Tom.</span> I'm a Front-End Web Developer. A writer of clean, elegant code that functions how it should and looks great.</p>
          <p data-aos="fade-up" data-aos-duration="2000">My whole life, I've always been interested in computers, software, and how to make them do amazing things. After working with non-profits for several years, I realized early in 2018 that my true passion is working with computers, and having dabbled in code here and there (but
                  never with any formal training), I decided I would finally work to master the concepts of web development. I now work
                  extensively with
                            <span className="name-color">HTML5, CSS3,</span> and
                            <span className="name-color">JavaScript</span>, as well as
                            <span className="name-color">PHP</span> and
                            <span className="name-color">WordPress</span> to implement solutions that solve whatever problems I encounter. Thanks for visiting, and please get
                            in touch if you'd like to talk more.</p>
        </div>
      </div>
    </div>

        <div className="portfolio">
      <h1 className="portfolio-header" data-aos="fade" data-aos-duration="1000" >Portfolio</h1>
      <div className="container anchor-padding" id="squareone">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <img className="card-img-top" data-aos="fade-right" data-aos-duration="2000" src={ squareOneImg }
                alt="Square one screenshot" />
                <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                  <h5 className="card-title">Square One Mission</h5>
                  <p className="card-text">A fantastic local company, Square One LLC develops and produces sustainable products that are reusable and environmentally-friendly. When they needed a site to send their customers to, I jumped at the chance to design and develop this landing page for them using Bootstrap, a bit of JavaScript, and HTML/CSS.</p>
                  <a href="https://squareonemission.com" target="_blank" className="btn btn-primary btn-name-color">View</a>
                </div>
                        </div>
            </div>
          </div>
        </div>
        <div className="container anchor-padding" id="offtherales">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card">
                <img className="card-img-top" data-aos="fade-right" data-aos-duration="2000" src={ offTheRalesImg } alt="Off the Rales screenshot" />
                  <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                    <h5 className="card-title">Off the Rales Homebrewery</h5>
                    <p className="card-text">In addition to web development, I am an avid homebrewer.  I built my own website to showcase my homebrewed beers.</p>
                    <a href="https://tom-raley.github.io/offtherales/" target="_blank" className="btn btn-primary btn-name-color">View</a>
                  </div>
                            </div>
              </div>
            </div>
            <div className="container anchor-padding" id="beerist">
              <div className="row justify-content-center">
                <div className="col-sm-8">
                  <div className="card" >
                    <img className="card-img-top" data-aos="fade-right" data-aos-duration="2000" src={ beeristImg } alt="Beerist screenshot" />
                      <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                        <h5 className="card-title">Beerist</h5>
                        <p className="card-text">A single page beer recommendation web app that uses JavaScript to take a user input, interface with the Untappd API, and return a percentage chance of the user liking that beer.</p>
                        <a href="https://tom-raley.github.io/beerist/" target="_blank" className="btn btn-primary btn-name-color">View</a>
                      </div>
                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container anchor-padding" id="contact">
            <div className="row justify-content-center">
              <h1 className="col-sm-8 contact-header"><a id="mail-link" href="mailto:tom.raley@gmail.com?subject=Portfolio Inquiry">Get In Touch!</a></h1>
            </div>
          </div>

          <footer>
            <div className="footer-social">
              <a className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank"></a>
              <a className="social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank"></a>
              <a className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank"></a>
            </div>
            <p>tom raley &copy 2018</p>
          </footer>
  </Layout>
)

export default IndexPage
