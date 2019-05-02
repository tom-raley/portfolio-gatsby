import React, { Component } from "react"

class Navbar extends Component {
  render() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" id="nav">
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
            <a className="nav-link" href="#about">About<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio" role="button">Portfolio</a>
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
  } 
}

export default Navbar