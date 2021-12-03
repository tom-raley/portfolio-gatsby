import React, { Component } from 'react'
import Img from "gatsby-image"

class Portfolio extends Component {
  render() {
    const {title, href, description, url, target, github, image} = this.props.node;
    // const { fluid } = this.props
    return (
      <div className="container overflow-hidden" id={href}>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-img-top" data-aos="fade-right" data-aos-duration="2000">
                <Img
                  fluid={image.fluid}
                />
              </div>
              <div className="card-body" data-aos="fade-left" data-aos-duration="2000">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.childMarkdownRemark.rawMarkdownBody}</p>
                <a href={url} target={target} rel="noopener noreferrer" className="btn btn-primary btn-name-color" id="view-online">View Online</a>
                {!github && <a style={{cursor: 'not-allowed', color: '#fff', pointerEvents: 'auto'}} href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary disabled" id="view-source-code" disabled="true" aria-disabled>Private Source Code &#128584;</a>}
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-name-color" id="view-source-code">View Source Code</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio