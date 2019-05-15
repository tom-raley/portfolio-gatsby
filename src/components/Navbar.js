import React, { Component } from "react"
import { Link } from 'gatsby'

class Navbar extends Component {
  render() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" id="nav">
      <Link
      to="/"
      className="navbar-brand" 
      id="home-button"
      >
        tom<span className="name-color">raley</span>
      </Link>
      <button className="hamburger hamburger--spin navbar-toggler collapsed" id="mobile-nav-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link 
          to="#about"
          className="nav-link"
          >
            About<span className="sr-only">(current)</span>
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#portfolio"
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#contact"
              className="nav-link"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-link"
            >
              Blog
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank" rel="noopener noreferrer"><i alt="facebook logo"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener noreferrer"><i alt="twitter logo"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener noreferrer"><i alt="github logo"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  } 
}

export default Navbar