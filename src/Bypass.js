import React, { Component } from "react";
import axios from "axios";

const API_VERSION = "/api/v1/";

export default class Bypass extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    axios
      .get(`${API_VERSION}profile/all`)
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;
    const teim = new Date();

    return (
      <div>
        <h1>HERRO WRLD!</h1>
        <h6
        >{`Teim is ${teim.getHours}:${teim.getMinutes}:${teim.getSeconds}`}</h6>
      </div>
    );
  }
}
