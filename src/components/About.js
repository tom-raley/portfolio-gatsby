import React, { Component } from "react"

class About extends Component {

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return <div className="container overflow-hidden" id="about">
      <div className="row">
        <div className="about">
          <h1 data-aos="fade-right" data-aos-duration="2000">About</h1>
          <p className="lead" data-aos="fade-up" data-aos-duration="2000">I'm <span className="name-color">Tom.</span> I'm a Full Stack Web Developer. A writer of clean, elegant code that functions how it should and looks great.</p>
          <p data-aos="fade-up" data-aos-duration="2000">My whole life, I've always been interested in computers, software, and how to make them do amazing things. After working with non-profits for several years, I realized early in 2018 that my true passion is working with computers, and having dabbled in code here and there (but
            never with any formal training), I decided I would finally work to master the concepts of web development. I now work
            extensively with{" "}
                    <span className="name-color">HTML5, CSS3,</span> and {" "}
                    <span className="name-color">JavaScript</span>, as well as{" "}
                    <span className="name-color">AngularJS</span>,
                    <span className="name-color"> ReactJS</span> and{" "}
                    <span className="name-color">GatsbyJS</span> to implement solutions that solve whatever problems I encounter. Thanks for visiting, and please get
                    in touch if you'd like to talk more.</p>
        </div>
      </div>
    </div>
  }
}

export default About