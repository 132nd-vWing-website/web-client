import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Carousel } from 'antd';

import { getSliders } from '../../actions/staticsActions';

import './style.css';

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

    const carouselitems = slides.map((slide) => (
      <CarouselItem key={slide._id} title={slide.heading} body={slide.body} img={slide.bg} />
    ));

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

/** CAROUSEL ITEM COMPONENT */
const CarouselItem = (props) => {
  const { title, body, img } = props;

  console.log(props);

  return (
    <div>
      <img src={img} alt={title} style={{ maxHeight: '70vh', objectFit: 'cover' }} />
      <h1 className='text-uppercase'>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  img: PropTypes.string,
};

CarouselItem.defaultProps = {
  title: '',
  body: '',
  img: '',
};
