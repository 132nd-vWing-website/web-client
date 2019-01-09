import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import TextFieldGroup from "../ui/forms/TextFieldGroup";
import TextAreaFieldGroup from "../ui/forms/TextAreaFieldGroup";
import SelectListGroup from "../ui/forms/SelectListGroup";
import InputGroup from "../ui/forms/InputGroup";

import { createProfile, getCurrentProfile } from "../../actions/profileActions";

import isEmpty from "../../validation/is-empty";

class EditProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    youtube: "",
    twitch: "",
    twitter: "",
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      githubusername: this.state.githubusername,
      youtube: this.state.youtube,
      twitch: this.state.twitch,
      twitter: this.state.twitter
    };

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  componentWillReceiveProps(nextProps) {
    // ANYTHING YOU WANT TO TRIGGER WHEN STATE CHANGES GOES HERE!
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // Bring skills array back to CSV
      const skillsCSV = profile.skills.join(",");

      // If profile field doesn't exist, make an empty string
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";

      profile.social = !isEmpty(profile.social) ? profile.social : {};
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";
      profile.twitch = !isEmpty(profile.social.twitch)
        ? profile.social.twitch
        : "";
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";

      // Set components field state
      this.setState({
        handle: profile.handle,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        bio: profile.bio,
        githubusername: profile.githubusername,
        youtube: profile.youtube,
        twitch: profile.twitch,
        twitter: profile.twitter
      });
    }
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="YouTube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Twitch Profile URL"
            name="twitch"
            icon="fab fa-twitch"
            value={this.state.twitch}
            onChange={this.onChange}
            error={errors.twitch}
          />
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: "* Select Status", value: 0 },
      { label: "Guest", value: "Guest" },
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Your Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info={
                    "A unique handle for your profile URL. You can use this to link your profile directly"
                  }
                />
                <SelectListGroup
                  placeholder="Status"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  options={options}
                  info={
                    "Give us an idea of what can be expected in terms of event participation"
                  }
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info={"Optional - Where are you from (eg. country)"}
                />
                <TextFieldGroup
                  placeholder="* Skills"
                  name="skills"
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info={
                    "Please use comma separated values (eg. A10C, FA18C, JTAC, ATC)"
                  }
                />
                <TextFieldGroup
                  placeholder="Github Username"
                  name="githubusername"
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info={"Optional - Github username, share your repos! :)"}
                />

                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info={"Tell us a little about yourself"}
                />

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    Add Social Network Links
                  </button>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile
})(withRouter(EditProfile));
