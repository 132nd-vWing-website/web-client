// @flow
let Utility = {};

/* 
  GENERATORS ###############################################################################
*/

/* TIMESTAMP: Returns a string in the format of "HM:MM:SS :: <TIME>" */
Utility.timestamp = () => {
  let t = new Date();
  let ts = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + " :: ";
  return ts;
};

/* TRACKNUM: Generates a string for a track number */
Utility.trackNum = function(string) {
  var number = "";
  var length = string.length;
  for (var i = 0; i < length; i++) number += string.charCodeAt(i).toString(5);
  number = number.substring(0, 4);
  return number;
};

/* GUID: Generates a global unique identifier string */
Utility.guid = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

/**
 * @desc Pads a number with a leading number (z) - according to value of width
 * 
 * @param {integer} n - number to pad
 * @param {integer} width - total width of the finished number
 * @param {integer} z - number to pad n width to the width of width
 */
Utility.padNumber = (n, width = 3, z = 0) => {
  if (typeof n === "undefined") n = 0;

  if (!isNaN(parseFloat(n))) {
    n = Math.round(n);
  }

  return (String(z).repeat(width) + String(n)).slice(String(n).length);
};

/* 
  CONVERTERS ###############################################################################
*/

/* DEG2RAD: Converts the supplied value in DEGREES to RADIANS */
Utility.deg2rad = function(deg) {
  return deg * Math.PI / 180;
};

/* RAD2DEG: Converts the supplied value in RADIANS to DEGREES */
Utility.rad2deg = function(rad) {
  return rad * 180 / Math.PI;
};

/* METERS TO FEET: Converts supplied value in METERS to FEET. Will round to nearest foot unless rounded is supplied as false */
Utility.metersToFeet = function(meters, rounded = true) {
  let feet = meters * 3.28084;
  if (rounded === true) feet = Math.round(feet);
  return feet;
};

Utility.metersToNautical = function(meters) {
  let nautical = meters * 0.000539957;
  return nautical;
};

/* METERS TO FL: Converts supplied value in METERS to FLIGHTLEVEL */
Utility.metersToFL = function(meters) {
  let fl = Math.round(meters * 3.28084 / 100);
  if (fl < 100) fl = "0" + fl;
  return fl;
};

Utility.knotsToMs = function(knots) {
  let ms = knots * 0.514444444;
  return ms;
};

Utility.msToKnots = function(ms) {
  let knots = ms / 0.514444444;
  return knots;
};

/*
  GEOGRAPHICALS ###############################################################################
*/

/**
 * @desc Converts Decimal Degrees to Decimal Minutes Seconds
 * @param {float} dd - Decimal Degrees to convert
 * @return {string} dms - returns a string formatted as DMS
 */
Utility.DDtoDMS = function(dd) {
  let dec = dd.toString().split(".")[0];
  let min = parseFloat("." + dd.toString().split(".")[1]) * 60;
  let sec = Math.round(parseFloat("." + min.toString().split(".")[1]) * 60);

  min = Utility.padNumber(min.toString().split(".")[0], 2);
  sec = Utility.padNumber(sec.toString(), 2);

  let res = dec + "°" + min + "'" + sec;
  return res;
};

/**
 * @desc Converts Decimal Degrees to Degress Decimal Minutes
 * @param {float} dd - Decimal Degrees to convert
 * @return {string} dds - returns a string formatted as DDS
 */
Utility.DDtoDDS = function(dd) {
  // 41.7585 =>  41° 45.510'N ;
  let dec = dd.toString().split(".")[0];
  let ms = ((dd - dec) * 60).toFixed(3);

  let min = ms.toString().split(".")[0];
  let sec = ms.toString().split(".")[1];

  min = Utility.padNumber(min.toString().split(".")[0], 2);
  sec = Utility.padNumber(sec.toString(), 3);

  let res = dec + "°" + min + "." + sec;

  // let res = dec + "°" + ms.toFixed(3);
  return res;
};

/*
  CALCULATE LAT/LON DISTANCES:
	Calculates distance in meter for 1deg of longitude and latitude - based on latitude (WGS84)
	Source: http://msi.nga.mil/MSISiteContent/StaticFiles/Calculators/degree.html
*/
Utility.calcLatLonDistances = function(Latitude_In_Degrees) {
  // Convert latitude to radians
  let lat = Utility.deg2rad(Latitude_In_Degrees);

  // Set up "Constants"
  let m1 = 111132.92; // latitude calculation term 1
  let m2 = -559.82; // latitude calculation term 2
  let m3 = 1.175; // latitude calculation term 3
  let m4 = -0.0023; // latitude calculation term 4
  let p1 = 111412.84; // longitude calculation term 1
  let p2 = -93.5; // longitude calculation term 2
  let p3 = 0.118; // longitude calculation term 3

  // Calculate the length of a degree of latitude and longitude in meters
  let latlen =
    m1 +
    m2 * Math.cos(2 * lat) +
    m3 * Math.cos(4 * lat) +
    m4 * Math.cos(6 * lat);
  let longlen =
    p1 * Math.cos(lat) + p2 * Math.cos(3 * lat) + p3 * Math.cos(5 * lat);

  // Distances in meters
  const lenghts = {
    lat: Math.round(latlen),
    lon: Math.round(longlen)
  };

  return lenghts;
};

/**
 * @desc Finds the straight line distance between two points
 * @param {array} f - array of lat,lon in DD
 * @param {array} s - array of lat,lon in DD
 * @returns {float} - Distance between points in meters
 * 
 * @example
 *      let distance = findCoordDistance([42.178, 42.496], [41.905, 42.84])
 */
Utility.findCoordDistance = function(f, s) {
  // a = sin²(Δφ/2) + cos(φ1)⋅cos(φ2)⋅sin²(Δλ/2)
  // tanδ = √(a) / √(1−a)
  // see mathforum.org/library/drmath/view/51879.html for derivation

  let R = 6371e3; // meters - circumference of the earth

  let lat1 = Utility.deg2rad(f[0]);
  let lat2 = Utility.deg2rad(s[0]);

  let deltaLat = Utility.deg2rad(s[0] - f[0]);
  let deltaLon = Utility.deg2rad(s[1] - f[1]);

  let a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let res = R * c; // Distance in meters!

  return res;
};

/**
 * @desc Finds the straight line bearing between two coordinates
 * @param {array} f - array of lat,lon in DD
 * @param {array} s - array of lat,lon in DD
 * @returns {float} - Initial bearing between points in radians
 * 
 * @example 
 *      let bearing = findBearing([42.177, 42.481], [42.110, 41.001])
 */
Utility.findBearing = function(f, s) {
  // tanθ = sinΔλ⋅cosφ2 / cosφ1⋅sinφ2 − sinφ1⋅cosφ2⋅cosΔλ
  // see mathforum.org/library/drmath/view/55417.html for derivation

  let lat1 = Utility.deg2rad(f[0]);
  let lat2 = Utility.deg2rad(s[0]);
  let deltaLon = Utility.deg2rad(s[1] - f[1]);
  let y = Math.sin(deltaLon) * Math.cos(lat2);
  let x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
  let brng = Math.atan2(y, x);

  // console.log("Bearing: %s", (Utility.rad2deg(brng) + 360) % 360);

  return (Utility.rad2deg(brng) + 360) % 360;
};

/* CURVE DISTANCE: Takes a straight-line distance and returns the actual distance when converted into  a distance between two points on a circle. See https://en.wikipedia.org/wiki/Great-circle_distance. */
Utility.curveDistance = function(distance, radius = 10) {
  // Usefull for finding the actual distance between two points points on earth
};

/* CALCULATE ETA: Calculates the estimated time of arrival. This distance is not linear. It is an arch because of the earths curvature. See https://en.wikipedia.org/wiki/Great-circle_distance */
Utility.calculateETA = function(distance, speed, straightLine = false) {};

module.exports = Utility;
