import React, { Component } from "react"
import Img from "gatsby-image"
import Center from 'react-center'

class Jumbotron extends Component {
  render() {
    const profilePic = this.props.profilePic.childImageSharp.fluid
    const profilePicStyle = {
      borderRadius: "50%",
      width: "300px",
      animation: "3s 0s 1 fadeIn",
      textAlign: "center"
    }
    return <div className="jumbotron jumbotron-fluid" id="home">
      <div className="container">
        <Center>
          <Img fluid={profilePic} style={profilePicStyle} alt="tom" />
        </Center>
        <h1 className="display-4">Hi, I'm Tom.</h1>
        <p className="lead">I'm passionate about solving problems and creating beautiful, functional solutions. </p>
        <p className="lead">My tools are HTML, CSS and JavaScript.</p>
      </div>
    </div>
  }
}

export default Jumbotron