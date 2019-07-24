import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  render() {
    const {title, id, description, url, fluid, target, github} = this.props;
    return (
      <div className="container anchor-padding" id={id}>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-img-top" data-aos="fade-right" data-aos-duration="2000">
                <Img
                  fluid={fluid}
                />
              </div>
              <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                  <a href={url} target={target} rel="noopener noreferrer" className="btn btn-primary btn-name-color" style={{marginRight: '1rem'}}>View Online</a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color" style={{marginLeft: '1rem'}}>View Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio