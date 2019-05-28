import React, { Component } from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin} from 'react-icons/fa'

class Navigation extends Component {
   constructor(props) {
    super(props);  
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    this.setState({ active: !this.state.active, expanded: !this.state.expanded});
  }
  
  render() {
    return <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" id="nav">
      <Navbar.Brand id="home-button"><Link className="navbar-brand" to="/#home">tom<span className="name-color">raley</span></Link></Navbar.Brand>
        <Navbar.Toggle onClick={() => this.toggleClass()} className = {this.state.active ? 'is-active hamburger hamburger--spin' : 'hamburger hambuger--spin'} id="mobile-nav-button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" to="/#about">About</Link></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" to="/#portfolio">Portfolio</Link></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" role="button" to="/#contact">Contact</Link></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" role="button" to="/blog">Blog</Link></Navbar.Toggle>
          </Nav>
          <Nav>
            <Nav.Link className="social-logo" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank"><FaLinkedin size={32} /></Nav.Link>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank"><FaTwitterSquare size={32} /></Nav.Link>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://github.com/tom-raley" target="_blank"><FaGithubSquare size={32} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  } 
}

export default Navigation