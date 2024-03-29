import React, { Component } from "react"
import { FaGithubSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

class Footer extends Component {
  render() {
    return <footer>
      <div className="footer-social overflow-hidden">
        {/* <a className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">LinkedIn</span><FaLinkedin size={32} /></a> */}
        <a className="social-logo fab fa-x-twitter fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">Twitter</span><FaXTwitter size={32} /></a>
        <a className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener noreferrer"><span className="visually-hidden">GitHub</span><FaGithubSquare size={32} /></a>
      </div>
    </footer>
  }
}

export default Footer