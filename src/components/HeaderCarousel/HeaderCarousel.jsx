import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Carousel } from 'antd';

import { getSliders } from '../../actions/staticsActions';

import './style.css';

class HeaderCarousel extends Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    const { fetchSlides } = this.props;
    fetchSlides();
  }

  shouldComponentUpdate(nextProps) {
    const { slides } = this.state;
    if (slides !== nextProps.slides) return true;
    return false;
  }

  sortSlides = (slides) => {
    slides.sort((a, b) => {
      if (a.index > b.index) return -1;
      if (a.index < b.index) return 1;
      return 0;
    });
  };

  render() {
    return (
      <Carousel effect='fade' autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}

HeaderCarousel.propTypes = {
  fetchSlides: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  slides: state.statics.frontpageSliders,
});

export default connect(
  mapStateToProps,
  { fetchSlides: getSliders },
)(HeaderCarousel);
