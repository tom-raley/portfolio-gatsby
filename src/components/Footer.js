import React, { Component } from "react"

class Footer extends Component {
  render() {
    return <footer>
      <div className="footer-social">
        <a className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank" rel="noopener noreferrer"><i alt="facebook logo"></i></a>
        <a className="social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener noreferrer"><i alt="twitter logo"></i></a>
        <a className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener noreferrer"><i alt="github logo"></i></a>
      </div>
    </footer>
  }
}

export default Footer