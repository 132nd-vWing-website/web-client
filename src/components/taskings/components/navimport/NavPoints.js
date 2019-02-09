import React, { Component } from "react";
import toGeoJSON from "@mapbox/togeojson";

import LoadingScreen from "../../loadingscreen/LoadingScreen";
import NavActions from "./navactions/NavActions";
import NavItems from "./navitems/NavItems";

import "./style.css";

export default class NavImport extends Component {
  state = { navpoints: null, loading: false, filter: "" };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  // Parse the file into usable JSON
  fileParser = file => {
    console.log(file);

    let reader = new FileReader();

    // Filetype validation
    let allowedTypes = ["kml", "json", "geojson"];
    let fileType = file.name
      .split(".")
      .pop()
      .toLowerCase();

    // Check if the current file's type is allowed
    if (allowedTypes.indexOf(fileType) > -1) {
      reader.type = file.type;
      reader.readAsText(file);

      reader.onloadstart = e => {
        this.setState({ loading: true });
      };

      reader.onloadend = e => {
        let res = e.target.result;

        // If input file is KML
        if (fileType === "kml") {
          let XMLdom = new DOMParser().parseFromString(res, "text/xml");
          res = toGeoJSON.kml(XMLdom);
        }

        // If input file is GeoJSON/JSON
        if (fileType === "geojson" || fileType === "json") {
          res = JSON.parse(res);
        }

        this.setState({
          navpoints: res,
          loading: false
        });
      };
    } else {
      // Display a message if the type is not supported
      alert("Filetype for selected file is not supported");
    }
  };

  render() {
    const { navpoints, loading, filter } = this.state;
    const { plan, updatePlan } = this.props;
    return (
      <div className="mt-4">
        {loading ? <LoadingScreen /> : null}
        <h4 className="mb-2">Nav Points</h4>
        <NavActions
          handleFilterUpdate={this.updateFilter}
          handleFile={this.fileParser}
        />
        <NavItems
          data={navpoints}
          plan={plan}
          updatePlan={updatePlan}
          handleFile={this.fileParser}
          filter={filter}
        />
      </div>
    );
  }
}
