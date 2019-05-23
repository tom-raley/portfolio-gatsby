import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  render() {
    const {title, id, description, url, photos} = this.props;
    const images = ({photos}) => (
        <Img
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          style={{ margin: '3rem 0' }}
        />
      ))
    return (
      <div className="container anchor-padding" id={id}>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              {images}
              <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio