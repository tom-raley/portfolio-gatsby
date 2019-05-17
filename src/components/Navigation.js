import React, { Component } from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Navigation extends Component {
  
  componentDidMount() {
    //Makes X change to hamburger on click of link inside of nav menu
    /* $(".nav-link:not(#navbarDropdown)").click(function () {
      $("#mobile-nav-button").toggleClass("is-active");
    })

    //If Collapses navbar when clicking on tomraley when mobile navbar is shown
    $("#home-button").click(function () {
      $("#mobile-nav-button").toggleClass("is-active");
      $("#navbarSupportedContent").collapse("hide");
    })

    //Makes hamburger change to X on click of hamburger button and back on click
    $("#mobile-nav-button").click(function () {
      $("#mobile-nav-button").toggleClass("is-active");
    });

    //Makes menu close when a link is clicked within menu
    $("#navbarSupportedContent").on('show.bs.collapse', function () {
      $('.nav-link:not(#navbarDropdown)').click(function () {
        $("#navbarSupportedContent").collapse('hide');
      });
    }); */
  } 
  render() {
    return <Navbar collapseOnSelect className="sticky-top" expand="lg" bg="light" id="nav">
      <Navbar.Brand id="home-button"><Link className="navbar-brand" to="/#home">tom<span className="name-color">raley</span></Link></Navbar.Brand>
        <Navbar.Toggle className="hamburger hamburger--spin" id="mobile-nav-button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link><Link className="nav-link" to="#about">About</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="#portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="#contact">Contact</Link></Nav.Link>
            <Nav.Link><Link className="nav-link" to="/blog">Blog</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="social-logo fab fa-linkedin fa-2x" id="nav-link-color" href="https://www.linkedin.com/in/tom-raley/" target="_blank"></Nav.Link>
            <Nav.Link className="social-logo fab fa-twitter-square fa-2x" id="nav-link-color" href="https://twitter.com/tom_raley" target="_blank"></Nav.Link>
            <Nav.Link className="social-logo fab fa-github-square fa-2x" id="nav-link-color" href="https://github.com/tom-raley" target="_blank"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  } 
}

export default Navigation