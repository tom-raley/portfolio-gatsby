import React, { Component } from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'

class BlogNavigation extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.homeButtonToggleClass = this.homeButtonToggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const menu = document.getElementById("navbarSupportedContent");
    this.setState({ active: !this.state.active, expanded: !this.state.expanded });
    if (menu.classList.contains("show")) return menu.classList.remove("show");
  }

  homeButtonToggleClass() {
    const menu = document.getElementById("navbarSupportedContent");
    if (menu.classList.contains("show")) {
      this.setState({ active: !this.state.active, expanded: !this.state.expanded });
      menu.classList.remove("show");
    }
  }

  render() {
    return <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" id="nav">
      <Navbar.Brand onClick={() => this.homeButtonToggleClass()} id="home-button"><Link className="navbar-brand" to="/#home">tom<span className="name-color">raley</span></Link></Navbar.Brand>
      <Navbar.Toggle onClick={() => this.toggleClass()} className={this.state.active ? 'is-active hamburger hamburger--spin' : 'hamburger hambuger--spin'} id="mobile-nav-button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link offset="50" className="nav-link" to="/#about">About</Link></Navbar.Toggle>
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link offset="350" className="nav-link" to="/#portfolio">Portfolio</Link></Navbar.Toggle>
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" role="button" to="/#contact">Contact</Link></Navbar.Toggle>
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" role="button" to="/blog">Blog</Link></Navbar.Toggle>
        </Nav>
        <Nav>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank" rel="noopener"><FaLinkedin size={32} /><span className="visually-hidden">LinkedIn</span></Nav.Link>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener"><FaTwitterSquare size={32} /><span className="visually-hidden">Twitter</span></Nav.Link>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener"><FaGithubSquare size={32} /><span className="visually-hidden">GitHub</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  }
}

export default BlogNavigation