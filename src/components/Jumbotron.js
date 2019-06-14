import React, { Component } from "react"
import Img from "gatsby-image"
import Center from 'react-center'

class Jumbotron extends Component {

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }


  render() {
    const profilePic = this.props.profilePic.childImageSharp.fluid
    const profilePicStyle = {
      borderRadius: "50%",
      width: "300px",
      textAlign: "center"
    }
    return <div className="jumbotron jumbotron-fluid" id="home">
      <div className="container">
        <Center>
          <Img fluid={profilePic} style={profilePicStyle} alt="tom" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"/>
        </Center>
        <h1 data-aos="fade-up" data-aos-duration="1000" className="display-4">Hi, I'm Tom.</h1>
        <p className="lead" data-aos="fade-up" data-aos-duration="2000">I'm passionate about solving problems and creating beautiful, functional solutions. </p>
        <p className="lead" data-aos="fade-up" data-aos-duration="2000">My tools are HTML, CSS and JavaScript.</p>
      </div>
    </div>
  }
}

export default Jumbotron