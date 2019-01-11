import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Carousel } from 'antd';

import { getSliders } from '../../actions/staticsActions';

import './style.css';

/** These should be loaded via the API in the future! Used to display a random image for each slide */
import slider1 from '../../img/sliders/slider1.png';
import slider2 from '../../img/sliders/slider2.png';
import slider3 from '../../img/sliders/slider3.png';
import slider4 from '../../img/sliders/slider4.png';
import slider5 from '../../img/sliders/slider5.png';

const sliders = [slider1, slider2, slider3, slider4, slider5];

/**
 * HeaderCarousel Component
 * @param {function} fetchSlides Function used for getting slides
 * @param {array} slides An array of slides to display
 */
class HeaderCarousel extends Component {
  componentDidMount() {
    const { fetchSlides } = this.props;
    fetchSlides();
  }

  shouldComponentUpdate(nextProps) {
    const { slides } = this.props;
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
    const { slides } = this.props;

    const carouselitems = slides.map((slide) => {
      const randSlider = sliders[Math.floor(Math.random() * sliders.length)];
      return (
        <CarouselItem key={slide._id} title={slide.heading} body={slide.body} imgUrl={randSlider} />
      );
    });

    return (
      <Carousel effect='fade' autoplay lazyLoad>
        {carouselitems}
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

/**
 * CarouselItem Component
 * @param {string} title
 * @param {string} body
 * @param {string} imgUrl
 */
const CarouselItem = (props) => {
  const { title, body, imgUrl } = props;

  return (
    <div
      className='header-carousel-item'
      style={{
        background: `url(${imgUrl})  center center no-repeat`,
        backgroundSize: 'cover',
      }}>
      <div>
        <h1>{title}</h1>
        <h3>{body}</h3>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  imgUrl: PropTypes.string,
};

CarouselItem.defaultProps = {
  title: '',
  body: '',
  imgUrl: '',
};
