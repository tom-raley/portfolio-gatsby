import React, { Component } from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
  render() {
    return <Navbar collapseOnSelect className="navbar sticky-top navbar-expand-lg navbar-light bg-light" expand="lg" bg="light" id="nav">
      <Link
      to="/"
      className="navbar-brand" 
      id="home-button"
      >
        tom<span className="name-color">raley</span>
      </Link>
      {//Need to make mobile menu collapse when clicking link and make animation work
      <Navbar.Toggle className="hamburger hamburger--spin navbar-toggler collapsed" id="mobile-nav-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </Navbar.Toggle>

      <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </Navbar.Collapse>
    </Navbar>
  } 
}

export default Navigation