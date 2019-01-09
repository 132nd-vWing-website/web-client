import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LandingCarouselItem from "./LandingCarouselItem";

import { getSliders } from "../../actions/staticsActions";

import Slider696 from "../../img/landing_slider_696th.png";
import Slider765 from "../../img/landing_slider_765th.png";
import Slider617 from "../../img/landing_slider_617th.png";
import Slider259 from "../../img/landing_slider_259th.png";
import Slider494 from "../../img/landing_slider_494th.png";
import SliderGithub from "../../img/landing_slider_github.png";

class LandingCarousel extends Component {
  state = {
    slides: []
  };

  sortSlides = slides => {
    slides.sort((a, b) => {
      if (a.index > b.index) return -1;
      if (a.index < b.index) return 1;
      return 0;
    });
  };

  componentDidMount() {
    this.props.getSliders();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slides) {
      this.setState({ slides: nextProps.slides });
    }
  }

  render() {
    let { slides } = this.state;

    let carouselItems = slides.map((slide, index) => (
      <LandingCarouselItem
        key={index}
        active={index === 0 ? "active" : ""}
        img={slide.bg}
        title={slide.heading}
        body={slide.body}
        footer={slide.footer}
      />
    ));

    let carouselIndicators = slides.map((slide, index) => (
      <li
        key={index}
        data-target="#landingpage_carousel"
        data-slide-to={index}
        className={index === 0 ? "active" : ""}
      />
    ));

    return (
      <div
        id="landingpage_carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">{carouselIndicators}</ol>
        <div className="carousel-inner">{carouselItems}</div>
        <a
          className="carousel-control-prev"
          href="#landingpage_carousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#landingpage_carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

LandingCarousel.propTypes = {
  getSliders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  slides: state.statics.frontpageSliders
});

export default connect(
  mapStateToProps,
  { getSliders }
)(LandingCarousel);

// const CarouselItem = props => {
//   return (
//     <div className={`carousel-item ${props.active}`}>
//       <img
//         className="d-block w-100"
//         src={props.img}
//         alt={props.title}
//         style={{ maxHeight: "70vh", objectFit: "cover" }}
//       />
//       <div
//         class="carousel-caption d-none d-md-block"
//         style={{ textShadow: "1px 1px 8px #000000cc" }}
//       >
//         <h1>{props.title}</h1>
//         <p>{props.body}</p>
//         <button className="btn btn-info pl-5 pr-5 mt-4">BUTTON LABEL</button>
//       </div>
//     </div>
//   );
// };

// <li
//   data-target="#landingpage_carousel"
//   data-slide-to="0"
//   className="active"
// />
// <li data-target="#landingpage_carousel" data-slide-to="1" />
// <li data-target="#landingpage_carousel" data-slide-to="2" />

//  <CarouselItem
//   active="active"
//   img={Slider696}
//   title="The 132nd Virtual Wing"
//   body="We are a community of people who play the Digital Combat Simulator (DCS) series. We are a group of people who enjoy playing together in a realistic environment"
// />
// <CarouselItem
//   active=""
//   img={Slider765}
//   title="title 2"
//   body="Lorem Ipsum..."
// />
// <CarouselItem
//   active=""
//   img={Slider259}
//   title="title 3"
//   body="Lorem Ipsum..."
// />
