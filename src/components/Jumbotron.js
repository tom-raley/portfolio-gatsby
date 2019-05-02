import React, { Component } from "react"
const profilePicImg = require('../dist/images/profile_pic.jpg')

class Jumbotron extends Component {
  render() {
    return <div className="jumbotron jumbotron-fluid" id="home">
      <div className="container">
        <img className="img-fluid" src={profilePicImg} alt="tom" />
        <h1 className="display-4">Hi, I'm Tom.</h1>
        <p className="lead">I'm passionate about solving problems and creating beautiful, functional solutions. </p>
        <p className="lead">My tools are HTML, CSS and JavaScript.</p>
      </div>
    </div>
  }
}

export default Jumbotron