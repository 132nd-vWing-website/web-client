import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import PatchTemplate, {
  PatchBackground,
  PatchBorderEmbrodery,
  PatchStitching
} from "./PatchTemplate";

import Nametag, {Assets} from "./Nametag";

import { Shield, SquadronTag } from "./assets/Assets";
import Patterns from "./assets/Patterns";

class Badge extends Component {
  render() {
    return (
      <div>
        <PatchTemplate>
          <Patterns.BasketWeave id="patch-bg-pattern" />
          <PatchBackground patternId="#patch-bg-pattern" fill="#69ff82" />
          <PatchBorderEmbrodery
            baseColor="#E52A12"
            color={{ base: "#E52A12", layer1: "", layer2: "" }}
          />
          <PatchStitching stitchColor="#081E3D" stitchWidth="2" />
          <Shield
            patternId="#patch-bg-pattern"
            translate="translate(67,45)"
            scale="scale(.65)"
            baseColor="#E52A12"
            opacity=""
          />
          <SquadronTag
            patternId="#patch-bg-pattern"
            label="132nd"
            x="115"
            y="182"
            baseColor="#E52A12"
            style={{ font: "bold 30px Cambria, serif" }}
            opacity=""
          />
        </PatchTemplate>

        <Nametag>
          <Patterns.SyntheticWeave id="background-texture-1" />
          <Patterns.MotifStitching id="motif-stitching" />
          <Assets.Callsign callsign="MAVRICK" />
          <Assets.SquadronTag tag="494th" patternId="#motif-stitching" />
          <Assets.WingTag tag="132nd" patternId="#motif-stitching" />
          <Assets.Wings patternId="#motif-stitching" />
        </Nametag>
      </div>
    );
  }
}

export default Badge;

// <Shield translate="translate(55,20)" scale="scale(.8)" baseColor="#E52A12" opacity=""/>
// <SquadronTag label="666th" x="115" y="182" baseColor="#E52A12" style={{ font: "bold 30px Cambria, serif" }} opacity="" />
