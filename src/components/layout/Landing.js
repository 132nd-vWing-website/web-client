import React, { Component } from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";

import UserNotamPanel from "../notams/UserNotamPanel";

// import CommitList from "../github/CommitList";

import LandingCarousel from "../landing-carousel/LandingCarousel";

import Slider696 from "../../img/landing_slider_696th.png";
import Slider765 from "../../img/landing_slider_765th.png";
import Slider617 from "../../img/landing_slider_617th.png";
import Slider259 from "../../img/landing_slider_259th.png";
import Slider494 from "../../img/landing_slider_494th.png";
import SliderGithub from "../../img/landing_slider_github.png";

class Landing extends Component {
  render() {
    const slides = [
      {
        img: Slider696,
        title: "132nd Virtual Wing",
        body:
          "We are a community of people who play the Digital Combat Simulator (DCS) series. We are a group of people who enjoy playing together in a realistic environment"
      },
      {
        img: Slider765,
        title: "Who are we?",
        body:
          "We are a virtual wing for simulator pilots who fly the DCS series of aircraft simulators. We consist of a small group of dedicated DCS pilots from all over Europe. Our aim is to create a virtual wing where the focus is realistic simulation on a serious but friendly atmosphere"
      },
      {
        img: Slider494,
        title: "Events",
        body:
          "We hold events in DCS on a weekly basis, mainly on Wednesday and Sundays at 1800 GMT. Training events are for all members to practice and conduct qualifications. Mission events are usually held on Sundays, and are available to all mission qualified pilots"
      }
    ];

    return (
      <div
        id="landing"
        className="col-sm-12 col-md-11 p-0"
        style={{ minHeight: "100vh" }}
      >
        <UserNotamPanel />

        {/* Content Container (scrollable) */}
        <div
          id="page-items"
          className="position-relative"
          style={{ overflow: "auto", height: "100vh" }}
          data-spy="scroll"
          data-offset="0"
        >
          <LandingCarousel id="page-item-0" />
          {/* TODO: Add an announcements component here! */}
          <LandingItem id="page-item-2" img={SliderGithub} />
        </div>
      </div>
    );
  }
}

export default Landing;

const LandingItem = props => (
  <div
    id={props.id}
    className="card border-0 rounded-0 text-white bg-dark p-0"
    style={{ minHeight: "70vh", maxHeight: "100vh" }}
  >
    {props.img ? (
      <img className="card-img rounded-0" src={props.img} alt="" />
    ) : null}
    <div
      className="card-img-overlay p-5"
      style={{ paddingTop: "6rem !important" }}
    >
      <div
        className={classnames("w-50", {
          "float-right text-right": props.align === "right"
        })}
        style={{ textShadow: "1px 1px 8px #000000cc" }}
      >
        {props.children}
      </div>
    </div>
  </div>
);

{
  /* <LandingItem id="page-item-1" img={Slider696}>
  <h1 className="card-title font-weight-bold">132nd VIRTUAL WING</h1>
  <p className="card-text" style={{ fontSize: "1.2rem" }}>
    We are a community of people who play the Digital Combat Simulator
    (DCS) series. We are a group of people who enjoy playing together
    in a realistic environment
            </p>
  <button className="btn btn-info pl-5 pr-5 mt-4">APPLY</button>
</LandingItem>
  <LandingItem id="page-item-2" img={Slider765} align="right">
    <h1 className="card-title font-weight-bold">WHO WE ARE</h1>
    <p className="card-text" style={{ fontSize: "1.2rem" }}>
      We are a virtual wing for simulator pilots who fly the DCS series
      of aircraft simulators. We consist of a small group of dedicated
      DCS pilots from all over Europe. Our aim is to create a virtual
      wing where the focus is realistic simulation on a serious but
      friendly atmosphere
            </p>
    <button className="btn btn-info pl-5 pr-5 mt-4">ABOUT US</button>
  </LandingItem>
  <LandingItem id="page-item-3" img={Slider617}>
    <h1 className="card-title font-weight-bold">EVENTS</h1>
    <p className="card-text" style={{ fontSize: "1.2rem" }}>
      We hold events in DCS on a weekly basis, mainly on Wednesday and
      Sundays at 1800 GMT. Training events are for all members to
      practice and conduct qualifications. Mission events are usually
      held on Sundays, and are available to all mission qualified pilots
            </p>
    <button className="btn btn-info pl-5 pr-5 mt-4">CALENDER</button>
  </LandingItem>
  <LandingItem id="page-item-4" img={Slider259} align="right">
    <h1 className="card-title font-weight-bold">TRAINING</h1>
    <p className="card-text" style={{ fontSize: "1.2rem" }}>
      We aim to fly and operate as realisticly as our simulated
      environment will let us. For this reason, each squadron has its
      own training program that pilots are put trough. During this
      process, we teach the skills neccesary to fly your airframe,
      employ weapons and work together in order to accomplish our
      mission. You choose a specific squadron to join, and start your
      training on your airframe.
            </p>
    <button className="btn btn-info pl-5 pr-5 mt-4">JOIN</button>
  </LandingItem>
  <LandingItem id="page-item-5" img={Slider494}>
    <h1 className="card-title font-weight-bold">GET IN TOUCH!</h1>
    <p className="card-text" style={{ fontSize: "1.2rem" }}>
      Feel free to reach out for any questions. We have a discord
      channel where you can find all pilots, or you can use the guest
      section on the forums
            </p>
    <button
      className="btn btn-outline-primary pl-5 pr-5 mt-4 mr-2"
      style={{ backgroundColor: "#7289da" }}
    >
      Join our Discord
            </button>
    <button className="btn btn-info pl-5 pr-5 mt-4">FORUM</button>
  </LandingItem> */
}
