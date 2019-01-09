import React from "react";

const Nametag = props => (
  <svg
    version="1.1"
    id="nametag"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="288px"
    height="144px"
    viewBox="0 0 288 144"
    enable-background="new 0 0 288 144"
    xmlSpace="preserve"
  >
    {props.children}
  </svg>
);

export const Assets = {}

Assets.Callsign = props => (
  <g className="nametag-callsign">
    <text fill="#F4C94E" id="nametag-callsign" transform="matrix(1 0 0 1 81.312 97.6872)" font-family="'Cambria'" font-size="30px">
      {props.callsign}
    </text>
    <g className="nametag-callsign-pattern" opacity="0.4">
    </g>
  </g>
)

Assets.SquadronTag = props => (
  <g className="nametag-squadron-tag">
    <text fill="#F4C94E" id="squadron-tag" transform="matrix(1 0 0 1 201.667 123.6872)" font-family="'Cambria'" font-size="26px">
      {props.tag}
    </text>
    <g className="nametag-squadron-tag-pattern" opacity="0.4">
      <pattern  id="squadron-tag_1_" xlinkHref={props.patternId} patternTransform="matrix(-3.491481e-15 -1 1 -3.491481e-15 -65.6353 -16022.7598)"></pattern>
      <text id="squadron-tag_11_" transform="matrix(1 0 0 1 201.667 123.6872)" fill="url(#squadron-tag_1_)" font-family="'Cambria'" font-size="26px">		
        <pattern  id="squadron-tag_2_" xlinkHhref={props.patternId} patternTransform="matrix(-3.491481e-15 -1 1 -3.491481e-15 -65.6353 -16022.7598)"></pattern>
        494th
      </text>
    </g>
  </g>
)

Assets.WingTag = props => (
  <g className="nametag-wing-tag">
    <text fill="#F4C94E" id="wing-tag" transform="matrix(1 0 0 1 19 123.6872)" font-family="'Cambria'" font-size="26px">
      {props.tag}
    </text>
    <g className="nametag-wing-tag-pattern" opacity="0.4">
    </g>
  </g>
)

Assets.Wings = props =>(
  <g>
		<path id="wing-emblem-badge" fill="#F4C94E" d="M161.4,33.8c0.1-0.2,0-0.2-0.1-0.3c-1.2-1.3-2.5-2.7-3.7-4c-0.1-0.1-0.3-0.2-0.5-0.2c-4.5,0-9.1,0-13.6,0v0c-4.5,0-9.1,0-13.6,0c-0.2,0-0.3,0-0.4,0.2c-1.2,1.3-2.3,2.5-3.5,3.8c-0.4,0.4-0.4,0.4-0.1,0.9c1,1.8,1.6,3.7,1.9,5.7c0.5,2.6,0.5,5.2,0.3,7.8c-0.1,1.7-0.4,3.4-0.8,5c-0.4,1.5-0.7,3.1-0.5,4.7c0.1,1.3,0.5,2.6,1.4,3.6c1.1,1.3,2.4,2.4,3.9,3.2c2.5,1.3,5.2,2.1,7.6,3.4c1.3,0.7,2.6,1.4,3.7,2.4c0.1,0.1,0.2,0.1,0.3,0c0.3-0.3,0.6-0.6,1-0.8c1.4-1,2.8-1.7,4.3-2.4c1.4-0.6,2.9-1.2,4.4-1.8c1.8-0.8,3.5-1.7,4.9-3.2c0.9-1,1.7-2,2-3.3c0.2-0.7,0.1-1.5,0.2-2.2c0-0.5,0-1-0.1-1.5c-0.1-0.8-0.3-1.5-0.5-2.3c-0.6-2-0.8-4.1-0.9-6.2c-0.1-2.5,0.1-5,0.6-7.5C159.9,37.1,160.4,35.4,161.4,33.8z M143.1,39.6c3.8,0,6.8,3,6.8,6.8c0,3.7-2.9,6.8-6.8,6.8c-3.7,0-6.7-3-6.7-6.8C136.3,42.6,139.2,39.6,143.1,39.6z M133.2,32.5c0.1-0.1,0.1-0.3,0.2-0.4c0.2,0.4,0.5,0.8,0.7,1.2c0.1,0.1,0.1,0.2,0.1,0.4c0.1,2.6,0.1,5.2,0.2,7.8c0.1,3,0.2,6,0.2,8.9c0,0.2,0,0.3-0.2,0.3c-0.3,0-0.6,0-0.9,0c-0.3,0-0.3,0-0.3-0.3c0-2-0.1-4.1-0.1-6.1c-0.1-3-0.1-5.9-0.2-8.9c0-0.3,0-0.6,0-0.8C132.7,33.7,132.8,33.1,133.2,32.5z M130.6,51.7c-0.2,0-0.3-0.1-0.3-0.3c0-0.4,0-0.5,0.5-0.5c2.2-0.1,4.4-0.1,6.6-0.2c0.2,0,0.2,0.1,0.2,0.2c0,0.5,0,0.5-0.4,0.5c-1.1,0-2.2,0-3.2,0c0,0.1,0,0.1,0,0.2C132.9,51.7,131.7,51.6,130.6,51.7z M134.2,57.4c-0.5,0.1-0.8-0.2-0.7-0.7c0-0.2,0-0.4,0-0.6c0-0.2,0-0.3,0-0.5c0.3,0.2,0.6,0.4,1,0.5c0,0,0.1,0.1,0.1,0.1c0,0.3,0.1,0.6,0.1,0.9C134.6,57.2,134.4,57.3,134.2,57.4z M140.1,55.3c-0.1,1.4-0.6,2.7-1.5,3.9c-0.4,0.5-0.8,1-1.4,1.2c-0.1,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4,0-0.5-0.1c-0.1-0.1,0.1-0.2,0.2-0.4c0.6-0.9,1.1-1.9,1.4-3c0.1-0.2,0.1-0.4,0.1-0.6c0-0.2-0.1-0.3-0.3-0.3c-0.5,0.1-1,0-1.5,0c-0.9,0-1.7-0.2-2.4-0.7c-0.3-0.2-0.5-0.5-0.6-0.7c-0.5-0.8-0.7-1.8-0.9-2.7c0-0.2,0-0.2,0.2-0.2c1.3,0,2.6,0,3.9-0.1c0.1,0,0.2,0,0.3,0.1c1.7,0.6,3.3,1.2,5.1,1.5c1.6,0.2,3.1,0.2,4.6-0.4c1.8-0.7,2.9-2.1,3.5-3.8c0.7-1.8,0.8-3.7,0.8-5.7c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1c0.1,0.4,0.2,0.7,0.2,1c0.2,1.4,0.3,2.7,0.1,4.1c-0.4,2.7-1.6,4.8-4.2,5.9c-0.8,0.4-1.6,0.6-2.4,0.8c-1.3,0.3-2.6,0.3-3.8,0.2c-0.1,0-0.2,0-0.3,0C140.1,55.1,140.1,55.1,140.1,55.3z M154.1,48.8c0.7-0.5,1.5-1.1,2.2-1.6c0,0,0,0,0.1,0.1c-0.3,2.2-1.4,4-3.4,5.1c0,0-0.1,0-0.1,0.1c0,0,0.1,0,0.1,0c0.5-0.1,1.1-0.2,1.6-0.3c0.2,0,0.2,0,0.2,0.2c-0.2,0.7-0.6,1.3-1,1.8c-0.7,0.8-1.6,1.4-2.6,1.9c0,0-0.1,0-0.1,0.1c0.3,0,0.7,0,1,0c0.3,0,0.3,0,0.2,0.3c-0.4,1.1-1.1,1.7-2.2,1.9c-0.6,0.1-1.1,0-1.7-0.1c0.4,0.4,0.7,0.8,1,1.3c-1.9,0.2-3.4-0.6-5-1.3c0.5,0.7,1.1,1.4,1.6,2.1c-0.7,0-1.4-0.1-2.1-0.3c-0.9-0.4-1.6-1-2.2-1.7c-0.6-0.7-1-1.5-1.4-2.3c-0.1-0.2-0.1-0.3,0.2-0.3c0.8,0.1,1.6,0.1,2.4,0c1.5-0.1,3-0.4,4.4-1.2c1.7-0.9,2.8-2.4,3.4-4.1c0.4-1.2,0.6-2.4,0.7-3.7c0-0.7,0.1-1.5,0-2.2c-0.1-0.6-0.1-1.2-0.2-1.8c-0.1-1.4-0.5-2.8-0.8-4.2c-0.6-2.2-1.3-4.4-2-6.6c-0.1-0.2,0-0.3,0.1-0.4c0.5-0.6,1-0.6,1.6,0c0.4,0.4,0.6,0.9,0.8,1.4c0.5,1.3,0.9,2.6,1.2,4c0.1-0.3,0.2-0.5,0.3-0.7c0.1-0.2,0.3-0.5,0.6-0.5c0.3,0,0.6,0.2,0.7,0.5c0.3,0.7,0.3,1.4,0.3,2.1c0,1-0.1,2-0.2,3c0,0,0,0,0.1,0.1c0.3-0.6,0.5-1.2,0.8-1.8c1,1.5,0.6,2.9,0,4.4c0.1,0.1,0.2,0,0.2-0.1c0.3-0.3,0.7-0.6,1-0.9c0.2-0.2,0.3-0.1,0.4,0.1c0.2,0.5,0.1,0.9,0,1.4c-0.3,1-0.8,1.8-1.3,2.7C154.8,47.8,154.5,48.3,154.1,48.8C154.1,48.8,154.1,48.8,154.1,48.8z"/>
		<path id="wing-emblem-shield" fill="#F4C94E" d="M143.3,52.4c3.1-0.1,5.9-2.8,5.8-6c0.1-3.2-2.7-6-6-6.1c-3.3,0-6.1,2.8-6.1,6C137,49.5,139.8,52.5,143.3,52.4z M147.5,42.5c1.9,1.8,2,5.5,0,7.7C147.5,47.6,147.5,45.1,147.5,42.5z M145.4,40.9c0.6,0.2,1.1,0.6,1.6,1c0.1,0.1,0.1,0.2,0.1,0.3c0,2.8,0,5.5,0,8.3c0,0.1,0,0.2-0.1,0.3c-0.5,0.4-1,0.8-1.6,1C145.4,48.2,145.4,44.6,145.4,40.9z M143.5,40.5c0.4,0.1,0.8,0.1,1.2,0.2c0.2,0,0.2,0.1,0.2,0.3c0,1.8,0,3.6,0,5.4c0,1.8,0,3.5,0,5.3c0,0.2,0,0.3-0.3,0.4c-0.4,0.1-0.8,0.2-1.3,0.2c-0.1,0-0.2,0-0.2-0.2c0-1.2,0-2.4,0-3.6c0-0.1,0.1-0.2,0.2-0.2c0.9-0.2,1.4-0.8,1.5-1.7c0-0.8-0.5-1.6-1.4-1.9c-0.2-0.1-0.3-0.1-0.3-0.3c0-1.2,0-2.4,0-3.6C143.2,40.5,143.3,40.4,143.5,40.5z M144.7,46.4c0,0.9-0.7,1.7-1.7,1.7c-0.9,0-1.6-0.8-1.6-1.7c0-0.9,0.7-1.6,1.6-1.6C143.9,44.8,144.7,45.5,144.7,46.4z M141.4,40.7c0.4-0.1,0.8-0.2,1.2-0.2c0.1,0,0.2,0,0.2,0.2c0,1.3,0,2.5,0,3.8c0,0.1,0,0.2-0.2,0.2c-1,0.2-1.7,1.2-1.4,2.4c0.2,0.6,0.6,1.1,1.3,1.2c0.2,0,0.2,0.1,0.2,0.3c0,1.1,0,2.3,0,3.4c0,0.2-0.1,0.3-0.3,0.2c-0.4,0-0.8-0.1-1.2-0.2c-0.2-0.1-0.2-0.2-0.2-0.3c0-1.8,0-3.5,0-5.3c0-1.7,0-3.5,0-5.2C141.1,40.8,141.2,40.7,141.4,40.7z M139.2,41.9c0.4-0.4,0.9-0.7,1.5-0.9c0.1,0.1,0,0.2,0,0.3c0,3.4,0,6.8,0,10.1c0,0.3,0,0.3-0.3,0.2c-0.1,0-0.2-0.1-0.2-0.1c-1.2-0.7-1.2-0.7-1.2-2c0-2.4,0-4.8,0-7.1C139,42.2,139,42,139.2,41.9z M138.5,50.1c-1.8-2-1.8-5.4,0-7.5C138.5,45.1,138.5,47.6,138.5,50.1z"/>
		<path id="wing-emblem-wings" fill="#F4C94E" d="M179.7,39.3c0.1,1.4-0.5,1.1-1.5,1.9c-0.6,0.5-0.7,1.2-0.8,1.8c-0.1,0.5-0.2,1.1-0.7,1.5l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.5,0.2-0.8,0.4-1,0.7l0,0l-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.4c-0.4,0.6-0.1,1.5-0.7,2.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0l0,0l0,0l0,0l0,0l0,0c-1.4,0.4-1.9,1.1-2.1,1.8l0,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.3,0.8-0.9,1-1.7,1.3l-0.1,0l-0.1,0l-0.1,0l0,0l-0.1,0l-0.1,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0c-0.2,0.1-0.3,0.2-0.4,0.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.3,0.6-0.6,1-1.6,1.1c-1.7,0.2-3,0.9-4.2,1.9c0-0.1,0-0.3,0-0.4c0.1-0.6,0-1.2-0.1-1.7l0-0.1c-0.1-0.8-0.3-1.6-0.5-2.4c-0.2-0.6-0.3-1.2-0.4-1.8c0.8-0.4,1.4-0.9,1.6-1.6l0,0l0,0l0,0l0,0c1.7-0.3,2.7-1.4,3-2.6c1.3-0.5,1.9-1.6,1.9-2.6c0-0.1,0-0.1,0-0.2c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.1-0.2,0.3-0.3,0.4-0.5c0.4-0.7,0.6-1.5,0.4-2.2c0,0,0-0.1-0.1-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.3-0.3,0.5-0.7,0.5-1.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0-0.1,0-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0-0.1l0-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.1-0.1,0.2-0.3,0.3-0.5l0,0c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.4-0.1-0.8-0.3-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c2.8-0.3,5.7-0.7,8.6-0.9c1.5-0.1,3-0.2,4.6,0l0,0l0,0l0,0l0,0l0,0l0,0l0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0.1,0,0.1,0l0,0l0,0c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.3,0,0.5c-0.1,0.8-0.7,1.7-1.5,2.2l0,0l0,0l0,0l0,0l0,0h0C179.6,37.6,179.6,38.3,179.7,39.3z M162.4,32.5c0.7,0.7,0.6,1.5,0.2,2.1c0,0,0,0.1,0,0.1c0.4-0.1,0.8-0.1,1.3-0.2l0.1,0l0.1,0l0,0c0.7-0.1,1.5-0.2,2.2-0.3c4.4-0.6,9-1,13.4-1.5l0,0c0.9-0.1,1.7-0.2,2.6-0.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0.2,0c0.1,0,0.2,0,0.3,0l0,0c0.1,0,0.2,0,0.3,0l0,0l0.2,0l0,0l0.2,0l0,0c3-0.4,4.5-0.9,6.3-1.6c4.8-1.6,11.9-4.1,51.3-7.8c-1.4-0.2-3.4-0.4-5.9-0.3c-15.4,0.7-33,2.7-47.8,5.3c-9.9,1.8-17.4,2.1-26.3,2.5c-0.2,0-0.5,0-0.7,0c0.3,0.3,0.6,0.6,0.8,0.9L162.4,32.5z M177.4,67.2c-0.5-0.5-1.3-1.1-2.7-1.8l0,0c-1.8-1-3.6-1.8-5.4-2.8c-2.8-1.6-5.8-3.4-7.5-4.5c-0.1,0.1-0.2,0.2-0.3,0.3c0,0.1,0,0.3-0.1,0.4c-0.2,0.9-0.5,1.6-1,2.3c0.1,0.1,0.1,0.1,0.2,0.2c0.5,0.4,1,0.8,1.5,1.2c2.9,2.3,6.9,5.4,7.8,5.7c0.2,0.1,0.4,0.1,0.7,0.2c1.1,0.3,2.8,0.5,4.3,0.5c1.4,0,2.6,0,2.7-0.3l0,0l0,0C178,68.2,178,67.8,177.4,67.2z M161.2,48.1L161.2,48.1l0.4-0.1c1.8-0.2,2.4-1.3,2.5-2.5l0,0l0.3-0.1l0,0l0,0c1.4-0.4,1.6-1.5,1.5-2.4l0,0c0.4-0.2,0.6-0.5,0.8-0.8c0.3-0.5,0.6-1.3,0.2-1.8l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.3-0.3l0,0l0.4-0.2c0.9-0.6,0.6-1.1,0.2-2.1l0,0l0,0l-0.1-0.2c0.4-0.4,0.9-0.9,0.9-1.5c0.1-0.7-0.7-1-1.5-1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0c-1.6,0.2-3,0.4-4.4,0.6c-0.5,1-0.9,2.2-1.2,3.6c-0.5,2.1-0.7,4.4-0.6,7.1c0,1.1,0.1,2.2,0.3,3.2C161.1,49.2,161.2,48.7,161.2,48.1z M223.2,44.3L223.2,44.3c-0.2,0-0.4,0-0.5,0c-0.1,0-0.2,0-0.3,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0c-0.8,0-1.8,0-3,0c-1.3,0-2.9,0-4.7,0c-11.7-0.2-23.5-0.5-35.2-1.5l0,0l-0.4,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.7-0.3,1.3-0.9,1.9l0,0l0,0c0,0,0,0,0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l-0.1,0l-0.1,0l-0.1,0l-0.1,0c0,0,0,0-0.1,0l0,0l-0.1,0c0,0,0,0-0.1,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0-0.1,0-0.1,0.1c2.6,0.3,5.3,0.5,7.9,0.8l0.1,0l0.1,0l0,0c4.7,0.5,9.5,0.9,14.2,1.4l0.1,0l0.3,0l0.2,0l0.2,0c5,0.5,10,0.9,15,1.5c1.6-0.1,3.4-0.3,5-0.6c1.6-0.3,3.1-0.8,4-1.6c1.7-1.3,2.7-2.1,2.5-2.5C226.1,44.4,225.2,44.3,223.2,44.3z M229.8,37.3L229.8,37.3c-0.4,0-0.8,0-1.2,0.1c-11.5,0.8-22.8,1.5-34.5,1.9c-2.6,0.1-5.2,0.2-7.5,0.2c-1.9,0-3.7,0-5.4,0l0,0c-0.2,0-0.3,0-0.5,0c-0.4,2-1.1,1.5-1.8,2.4c11.7,1,23.4,1.4,35.2,1.6c1.7,0,3.3,0,4.7,0c1.2,0,2.2,0,3,0l0.1,0l0,0l0.1,0l0,0l0,0l0,0l0,0l0,0l0,0c0.2,0,0.4,0,0.5,0c0.2,0,0.3,0,0.4,0c1.6-0.2,3.2-0.6,4.5-1c1.3-0.5,2.4-1.1,3-1.8c1.4-1.7,1.9-2.7,1.5-3C231.8,37.3,231.1,37.3,229.8,37.3z M237,30.3c-0.3-0.1-0.8-0.1-1.4-0.1l0,0c-2.1,0.2-4.6,0.7-6.6,0.9c-1.4,0.2-3.2,0.4-5.4,0.7c-13.5,1.7-27,3.4-40.7,4.1l0,0l0,0c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.3-0.6,0.7-0.9,0.9l0,0c0,0-0.1,0-0.1,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.5,0.3-0.8,0.7-0.7,1.3c0.4,0,0.9,0,1.3,0l0,0c1.1,0,2.2,0,3.3,0l0.1,0c13.6-0.2,27.4-0.8,40.8-1.9l0,0l0.2,0l0,0l0,0l0,0l0,0l0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0.2,0l0,0l0.1,0l0,0c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0,0.6,0c0.4,0,0.7,0,1.1-0.1c1.1-0.4,2.2-0.8,3.2-1.3c1-0.6,1.9-1.2,2.6-2C237.1,31.3,237.4,30.5,237,30.3z M190.5,31.4c-2.1,0.7-3.7,1.2-7,1.7l0,0l-0.2,0l0,0l-0.1,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0c0.7,0.5,0.5,1.4,0.3,1.9l0,0l0,0l0,0l0,0l0.1,0l0,0c3.1-0.2,6.2-0.4,9.2-0.7l0,0l0,0c10.3-0.9,22.6-2.4,30.7-3.4c2.1-0.3,3.9-0.5,5.4-0.7c2.1-0.3,4.5-0.7,6.6-0.9c0.1,0,0.2-0.1,0.2-0.1c1-0.4,3.2-1.6,4.9-2.8c1.5-1.1,2.6-2.2,2.5-2.9C202.9,27.3,195.5,29.8,190.5,31.4z M209.1,56.5c-0.4-0.3-1.2-0.6-2.5-0.8c-2.5-0.5-9.6-1.8-16.7-3.1c-5.6-1-11.2-2-16.8-3c-0.6,0.3-0.8,0.7-1,1.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.1,0.4-0.3,0.7-0.6,1c2.5,0.7,6.2,1.7,10.1,2.7l0,0l0,0c3.7,1,7.5,2,11.2,3l0,0l0.1,0l0,0l0,0l0.1,0l0.1,0c1.1,0.3,2,0.6,2.7,0.8c0.5,0.1,0.9,0.3,1.2,0.4c1.2,0.2,2.4,0.3,3.8,0.3c1.4,0,2.8-0.2,4.3-0.6c1.7-0.5,3.1-1,3.8-1.4c0.2-0.2,0.4-0.3,0.4-0.5C209.3,56.8,209.2,56.7,209.1,56.5z M197.3,60.1L197.3,60.1c-0.3-0.1-1-0.3-1.9-0.6c-0.8-0.2-1.8-0.5-2.8-0.8l-0.1,0l-0.1,0l0,0l0,0l-0.1,0l-0.1,0l-0.1,0l0,0l-0.1,0l-0.1,0l-0.1,0c-2.6-0.7-5.3-1.4-7.9-2.2c-0.9-0.2-1.8-0.5-2.8-0.7l0,0c-3.7-1-7.3-2-11-2.9c-0.4,0.1-0.8,0.2-1.1,0.4l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.1,0.2-0.2,0.4-0.3,0.6l0,0c-0.2,0.5-0.4,1-1.1,1.3L169,56l0.1,0l0.3,0.1l0.1,0.1l0,0l0.5,0.2l0,0l0.3,0.1l0,0l0.2,0.1l0.1,0l0.2,0.1l0,0c3.8,1.5,7.5,2.9,11.3,4.3c0.8,0.3,1.5,0.6,2,0.7c0.5,0.2,0.8,0.3,0.9,0.3l0,0l0,0l0,0l0,0l0,0l0,0c0.2,0.1,0.5,0.2,1,0.3c0.4,0.2,0.9,0.4,1.5,0.6c1,0.1,2.6,0.3,4.3,0.3c1.7,0,3.5-0.1,4.7-0.5c1-0.3,1.8-0.7,2.2-1c0.2-0.2,0.4-0.4,0.4-0.5c0-0.1-0.1-0.3-0.2-0.4C198.5,60.6,198,60.4,197.3,60.1z M214.9,50.3c-1.8-0.2-9.4-1-17.7-1.8c-4.2-0.4-8.4-0.8-12.6-1.2l0,0l-0.1,0l-0.1,0c-2.9-0.3-5.5-0.5-7.5-0.7l-0.2,0l-0.7-0.1c-0.2,0.5-0.1,1-0.3,1.5c-0.2,0.4-0.4,0.7-0.9,1l0,0l0,0l0,0l1.3,0.2l0.1,0c3.4,0.6,8.6,1.5,14,2.5c6.4,1.2,12.8,2.3,15.9,2.9c1.5,0.1,3.3,0.1,5-0.1c1.7-0.2,3.4-0.6,4.6-1.3c1.9-1.1,2.6-1.8,2.5-2.2C217.9,50.7,216.8,50.5,214.9,50.3z M187.9,64.3c-0.3-0.2-0.7-0.4-1-0.5l0,0c-0.5-0.2-1-0.4-1.4-0.6c-0.4-0.1-0.8-0.3-1-0.3l0,0l0,0l0,0c-0.1,0-0.5-0.2-1-0.4c-0.5-0.2-1.2-0.5-2-0.8c-4.5-1.7-9-3.5-13.5-5.2l0,0l-1.9-0.7c0,0-0.1,0-0.1,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0c-1.5,0.2-2.6,0.9-3.3,1.6l0.3,0.2l0,0l0.4,0.2l0,0l0.4,0.3l0,0l0.1,0l0,0c1.7,1.1,4,2.5,6.3,3.7c1.7,1,3.6,1.8,5.3,2.8c1.9,0.6,4.4,1.4,6.8,1.8c2.3,0.4,4.5,0.4,5.8-0.2C189.3,65.6,188.8,64.9,187.9,64.3z M118.8,40.2L118.8,40.2L118.8,40.2L118.8,40.2L118.8,40.2l-0.1-0.1l0,0l0,0l0,0l0,0l0,0c-0.3-0.3-0.5-0.7-0.5-1.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0-0.1,0-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0-0.1l0-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.1-0.1-0.2-0.3-0.3-0.5l0,0c-0.2-0.3-0.3-0.6-0.3-0.9c-0.1-0.4,0.1-0.8,0.3-1.1c0.1-0.1,0.1-0.1,0.2-0.2c-2.8-0.3-5.7-0.7-8.6-0.9c-1.5-0.1-3-0.2-4.6,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0-0.1,0-0.1,0l0,0l0,0c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.3,0,0.5c0.1,0.8,0.7,1.7,1.5,2.2l0,0l0,0l0,0l0,0l0,0h0c1.2,0.9,1.2,1.6,1.1,2.6c-0.1,1.4,0.5,1.1,1.5,1.9c0.6,0.5,0.7,1.2,0.8,1.8c0.1,0.5,0.2,1.1,0.7,1.5l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.5,0.2,0.8,0.4,1,0.7l0,0l0.1,0.1c0.1,0.1,0.1,0.2,0.2,0.4c0.4,0.6,0.1,1.5,0.7,2.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.2,0.1,0.5,0.2,0.8,0.3l0,0l0,0l0,0l0,0l0,0l0,0c1.4,0.4,1.9,1.1,2.1,1.8l0,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.3,0.8,0.9,1,1.7,1.3l0.1,0l0.1,0l0.1,0l0,0l0.1,0l0.1,0l0,0l0.1,0l0,0l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.4,0.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.3,0.6,0.6,1,1.6,1.1c1.7,0.2,3,0.9,4.2,1.9c0-0.1,0-0.3,0-0.4c-0.1-0.6,0-1.2,0.1-1.7l0-0.1c0.1-0.8,0.3-1.6,0.5-2.4c0.2-0.6,0.3-1.2,0.4-1.8c-0.8-0.4-1.4-0.9-1.6-1.6l0,0l0,0l0,0l0,0c-1.7-0.3-2.7-1.4-3-2.6c-1.3-0.5-1.9-1.6-1.9-2.6c0-0.1,0-0.1,0-0.2c-0.1-0.1-0.2-0.2-0.3-0.3l0,0c-0.1-0.2-0.3-0.3-0.4-0.5c-0.4-0.7-0.6-1.5-0.4-2.2C118.7,40.3,118.7,40.2,118.8,40.2z M103.3,32.2L103.3,32.2l0.2,0l0,0l0.2,0l0,0c0.1,0,0.2,0,0.3,0l0,0c0.1,0,0.2,0,0.3,0l0.2,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0.9,0.1,1.7,0.2,2.6,0.3l0,0c4.4,0.5,9,0.8,13.4,1.5c0.8,0.1,1.5,0.2,2.2,0.3l0,0l0.1,0l0.1,0c0.4,0.1,0.8,0.1,1.3,0.2c0,0,0-0.1,0-0.1c-0.3-0.5-0.4-1.4,0.2-2.1l1-1.1c0.3-0.3,0.6-0.6,0.8-0.9c-0.2,0-0.5,0-0.7,0c-8.9-0.4-16.3-0.8-26.3-2.5c-14.9-2.6-32.5-4.6-47.8-5.3c-2.5-0.1-4.5,0-5.9,0.3C85,26.6,92.2,29,97,30.7C98.9,31.3,100.3,31.8,103.3,32.2z M125.4,58.4c-0.1-0.1-0.2-0.2-0.3-0.3c-1.8,1.1-4.7,2.9-7.5,4.5c-1.8,1-3.6,1.9-5.4,2.8l0,0c-1.3,0.7-2.2,1.3-2.7,1.8c-0.6,0.6-0.6,1-0.4,1.4l0,0l0,0c0.2,0.3,1.4,0.4,2.7,0.3c1.5,0,3.2-0.2,4.3-0.5c0.3-0.1,0.5-0.1,0.7-0.2c1-0.4,5-3.5,7.8-5.7c0.5-0.4,1.1-0.8,1.5-1.2c0.1-0.1,0.1-0.1,0.2-0.2c-0.4-0.7-0.8-1.4-1-2.3C125.4,58.7,125.4,58.5,125.4,58.4z M124.9,35.6c-1.4-0.2-2.8-0.4-4.4-0.6l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.8,0-1.6,0.2-1.5,1c0.1,0.6,0.5,1.1,0.9,1.5l-0.1,0.2l0,0l0,0c-0.5,1-0.7,1.5,0.2,2.1l0.4,0.2l0,0l-0.3,0.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.4,0.5-0.1,1.3,0.2,1.8c0.2,0.4,0.5,0.6,0.8,0.8l0,0c-0.1,1,0.1,2.1,1.5,2.4l0,0l0,0l0.3,0.1l0,0c0.1,1.2,0.8,2.3,2.5,2.5l0.4,0.1l0,0c0,0.7,0.2,1.1,0.7,1.5c0.2-1,0.2-2.1,0.3-3.2c0.1-2.8-0.1-5-0.6-7.1C125.8,37.7,125.4,36.6,124.9,35.6z M87.3,47.9l0.2,0l0.2,0l0.3,0l0.1,0c4.7-0.5,9.5-0.9,14.2-1.4l0,0l0.1,0l0.1,0c2.6-0.3,5.3-0.5,7.9-0.8c0,0-0.1,0-0.1-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0c0,0,0,0-0.1,0l-0.1,0l0,0c0,0,0,0-0.1,0l-0.1,0l-0.1,0l-0.1,0l-0.1,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0l0,0l0,0c-0.6-0.5-0.8-1.2-0.9-1.9c0-0.1-0.1-0.2-0.1-0.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0-0.1l-0.4,0l0,0c-11.7,1-23.4,1.4-35.2,1.5c-1.8,0-3.4,0-4.7,0c-1.2,0-2.2,0-3,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0-0.5,0l-0.1,0c-1.9,0-2.9,0.1-3,0.4c-0.1,0.4,0.8,1.2,2.5,2.5c1,0.7,2.4,1.2,4,1.6c1.6,0.4,3.4,0.5,5,0.6C77.3,48.9,82.3,48.4,87.3,47.9z M64.3,43.5c0.1,0,0.3,0,0.5,0l0,0l0,0l0,0l0,0l0,0l0,0l0.1,0l0,0l0.1,0c0.8,0,1.8,0,3,0c1.4,0,3,0,4.7,0c11.7-0.2,23.5-0.5,35.2-1.6c-0.7-0.9-1.5-0.5-1.8-2.4c-0.1,0-0.3,0-0.5,0l0,0c-1.6,0-3.4,0-5.4,0c-2.3,0-4.9-0.1-7.5-0.2c-11.7-0.4-23-1.1-34.5-1.9c-0.4,0-0.8,0-1.1-0.1l0,0c-1.2,0-2,0-2.3,0.3c-0.4,0.4,0.1,1.3,1.5,3c0.6,0.8,1.7,1.4,3,1.8c1.3,0.5,2.9,0.8,4.5,1C63.9,43.5,64.1,43.5,64.3,43.5z M58.4,36.5c0.2,0,0.4,0,0.6,0c0.1,0,0.2,0,0.3,0l0,0l0.1,0l0,0l0.2,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0.1,0l0,0l0,0l0,0l0,0l0.2,0l0,0c13.4,1.1,27.2,1.7,40.8,1.9l0.1,0c1.1,0,2.2,0,3.3,0l0,0c0.5,0,0.9,0,1.3,0c0-0.6-0.3-0.9-0.7-1.3l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c0,0-0.1,0-0.1-0.1l0,0c-0.4-0.3-0.7-0.6-0.9-0.9c-0.1-0.1-0.1-0.2-0.2-0.3l0,0l0,0c-13.7-0.7-27.2-2.4-40.7-4.1c-2.2-0.3-4-0.5-5.4-0.7c-2.1-0.3-4.5-0.8-6.6-0.9l0,0c-0.6-0.1-1.1,0-1.4,0.1c-0.4,0.2-0.1,1,1.6,2.8c0.7,0.8,1.6,1.5,2.6,2c1,0.5,2.1,1,3.2,1.3C57.7,36.5,58,36.5,58.4,36.5z M51.7,29.4c2.1,0.2,4.5,0.7,6.6,0.9c1.4,0.2,3.3,0.4,5.4,0.7c8,1,20.3,2.5,30.7,3.4l0,0l0,0c3.1,0.3,6.1,0.5,9.2,0.7l0,0l0.1,0l0,0l0,0l0,0l0,0c-0.2-0.6-0.3-1.5,0.3-1.9l0,0l0,0l0,0l0,0l-0.1,0l0,0l0,0l-0.1,0l0,0l-0.2,0l0,0c-3.3-0.4-5-1-7-1.7C91.5,29.8,84,27.3,44,23.6c-0.1,0.7,1.1,1.9,2.5,2.9c1.7,1.2,3.8,2.4,4.9,2.8C51.5,29.3,51.6,29.4,51.7,29.4z M91.2,58.8c0.7-0.2,1.6-0.5,2.7-0.8l0.1,0l0.1,0l0,0l0,0l0.1,0l0,0c3.7-1,7.5-2,11.2-3l0,0l0,0c3.9-1,7.6-2,10.1-2.7c-0.3-0.3-0.4-0.7-0.6-1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0-0.1l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.2-0.4-0.4-0.8-1-1.1c-5.6,1-11.2,2-16.8,3c-7.2,1.3-14.3,2.6-16.7,3.1c-1.3,0.3-2.1,0.6-2.5,0.8c-0.2,0.1-0.2,0.2-0.2,0.3c0,0.1,0.2,0.3,0.4,0.5c0.7,0.5,2.1,1,3.8,1.4c1.5,0.4,3,0.6,4.3,0.6c1.4,0,2.6-0.1,3.8-0.3C90.3,59,90.7,58.9,91.2,58.8z M101.1,62.4c0.5-0.2,0.8-0.3,1-0.3l0,0l0,0l0,0l0,0l0,0l0,0c0.1,0,0.4-0.1,0.9-0.3c0.5-0.2,1.2-0.4,2-0.7c3.8-1.4,7.5-2.9,11.3-4.3l0,0l0.2-0.1l0.1,0l0.2-0.1l0,0l0.3-0.1l0,0l0.5-0.2l0,0l0.1-0.1l0.3-0.1l0.1,0l1.5-0.6c-0.7-0.3-0.9-0.8-1.1-1.3l0,0c-0.1-0.2-0.2-0.4-0.3-0.6l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0h0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0l0,0c-0.3-0.2-0.7-0.3-1.1-0.4c-3.7,1-7.3,1.9-11,2.9l0,0c-0.9,0.2-1.8,0.5-2.8,0.7c-2.6,0.7-5.3,1.4-7.9,2.2l-0.1,0l-0.1,0l-0.1,0l0,0l-0.1,0l-0.1,0l-0.1,0l0,0l0,0l-0.1,0l-0.1,0c-1.1,0.3-2,0.6-2.8,0.8c-0.9,0.3-1.5,0.5-1.9,0.6l0,0c-0.7,0.2-1.2,0.5-1.4,0.7C88,61,88,61.2,88,61.3c0,0.2,0.1,0.3,0.4,0.5c0.4,0.3,1.2,0.7,2.2,1c1.2,0.4,3,0.5,4.7,0.5c1.7,0,3.3-0.2,4.3-0.3C100.1,62.8,100.6,62.6,101.1,62.4z M81,54.7c3-0.6,9.4-1.8,15.9-2.9c5.4-1,10.6-1.9,14-2.5l0.1,0l1.3-0.2l0,0l0,0l0,0c-0.4-0.3-0.7-0.6-0.9-1c-0.2-0.5-0.2-1-0.3-1.5l-0.7,0.1l-0.2,0c-2,0.2-4.6,0.4-7.5,0.7l-0.1,0l-0.1,0l0,0c-4.2,0.4-8.4,0.8-12.6,1.2c-8.3,0.8-15.9,1.5-17.7,1.8c-1.9,0.2-3,0.5-3.1,0.8c-0.1,0.4,0.7,1.1,2.5,2.2c1.2,0.7,2.8,1.1,4.6,1.3C77.8,54.8,79.6,54.8,81,54.7z M116.9,61.9c2.3-1.3,4.6-2.7,6.3-3.7l0,0l0.1,0l0,0l0.4-0.3l0,0l0.4-0.2l0,0l0.3-0.2c-0.7-0.6-1.7-1.4-3.3-1.6l0,0l-0.1,0l0,0l0,0l0,0l0,0l0,0c-0.1,0-0.1,0-0.1,0l-1.9,0.7l0,0c-4.5,1.7-9,3.5-13.5,5.2c-0.8,0.3-1.5,0.6-2,0.8c-0.5,0.2-0.8,0.3-1,0.4l0,0l0,0l0,0c-0.2,0.1-0.6,0.2-1,0.3c-0.4,0.2-0.9,0.4-1.4,0.6l0,0c-0.4,0.2-0.7,0.3-1,0.5c-0.9,0.6-1.4,1.3,0,1.9c1.4,0.7,3.5,0.6,5.8,0.2c2.4-0.4,4.8-1.1,6.8-1.8C113.4,63.7,115.2,62.9,116.9,61.9z"/>
	</g>
)

export default Nametag;
