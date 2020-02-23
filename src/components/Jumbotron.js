import React, { Component } from "react"
import Img from "gatsby-image"
import Center from 'react-center'

class Jumbotron extends Component {
  render() {
    const profilePic = this.props.profilePic.fluid
    const profilePicStyle = {
      borderRadius: "50%",
      width: "300px",
      textAlign: "center"
    }
    return <div className="jumbotron jumbotron-fluid overflow-hidden" id="home">
      <div className="container">
        <Center data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="2000" data-aos-offset="0">
          <Img fluid={profilePic} style={profilePicStyle} alt="tom" />
        </Center>
        <h1 className="display-4">Hi, I'm Tom.</h1>
        <p className="lead" data-aos="fade-up" data-aos-duration="2000">I'm passionate about solving problems and creating beautiful, functional solutions. </p>
        <p className="lead" data-aos="fade-up" data-aos-duration="2000">My tools are HTML, CSS and JavaScript.</p>
      </div>
    </div>
  }
}

export default Jumbotron