import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  render() {
    const {title, id, img, description, url} = this.props;
    return (
      <div className="container anchor-padding" id={id}>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
                <img className="card-img-top" data-aos="fade-right" data-aos-duration="2000" src={img} alt={title} />
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