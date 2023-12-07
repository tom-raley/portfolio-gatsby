import React, { Component } from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaGithubSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

class Navigation extends Component {
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
    this.setState({ active: !this.state.active, expanded: !this.state.expanded});
    if(menu.classList.contains("show")) return menu.classList.remove("show");
  }

  homeButtonToggleClass() {
    const menu = document.getElementById("navbarSupportedContent");
    if(menu.classList.contains("show")) {
      this.setState({ active: !this.state.active, expanded: !this.state.expanded });
      menu.classList.remove("show");
    }
  }
  
  render() {
    const { resumeUrl } = this.props
    return <Navbar collapseOnSelect sticky="top" expand="lg" bg="light" id="nav">
      <Navbar.Brand onClick={() => this.homeButtonToggleClass()} id="home-button"><Link className="navbar-brand" to="/#home">tom<span className="name-color">raley</span></Link></Navbar.Brand>
        <Navbar.Toggle onClick={() => this.toggleClass()} className = {this.state.active ? 'is-active hamburger hamburger--spin' : 'hamburger hambuger--spin'} id="mobile-nav-button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><AnchorLink offset="50" className="nav-link" href="#about">About</AnchorLink></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><AnchorLink offset="350" className="nav-link" href="#portfolio">Portfolio</AnchorLink></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><AnchorLink className="nav-link" role="button" href="#contact">Contact</AnchorLink></Navbar.Toggle>
          <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Nav.Link className="nav-link" href={resumeUrl} target="_blank" rel="noopener">Resum&eacute; </Nav.Link></Navbar.Toggle>
            <Navbar.Toggle onClick={() => this.toggleClass()} role="button"><Link className="nav-link" role="button" to="/blog">Blog</Link></Navbar.Toggle>
          </Nav>
          <Nav>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank" rel="noopener"><FaXTwitter size={32} /><span className="visually-hidden">Twitter</span></Nav.Link>
          <Nav.Link className="social-logo" id="nav-link-color" href="https://github.com/tom-raley" target="_blank" rel="noopener"><FaGithubSquare size={32} /><span className="visually-hidden">GitHub</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  } 
}

export default Navigation