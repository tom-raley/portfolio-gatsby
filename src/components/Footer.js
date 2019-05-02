import React, { Component } from "react"

class Footer extends Component {
  render() {
    return <footer>
      <div className="footer-social">
        <a className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank"></a>
        <a className="social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank"></a>
        <a className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank"></a>
      </div>
    </footer>
  }
}

export default Footer