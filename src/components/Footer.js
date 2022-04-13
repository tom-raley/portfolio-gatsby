import React, { Component } from "react"
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
// import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

class Footer extends Component {
  render() {
    return <footer>
      <div className="footer-social overflow-hidden">
        {/* <a className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">LinkedIn</span><FaLinkedin size={32} /></a> */}
        <a className="social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">Twitter</span><FaTwitterSquare size={32} /></a>
        <a className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">GitHub</span><FaGithubSquare size={32} /></a>
      </div>
    </footer>
  }
}

export default Footer