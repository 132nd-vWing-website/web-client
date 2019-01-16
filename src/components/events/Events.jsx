import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import EventList from './EventList';
import Event from './Event';

/**
 * TEMP EVENT COMPONENT
 */

/**
 * EVENTS LIST COMPONENT
 */
/* eslint react/prefer-stateless-function:0 */
export default class Events extends Component {
  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <Route path={`${match.path}/:id`} component={Event} />
        <Route exact path={match.path} component={EventList} />
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  match: PropTypes.object.isRequired,
};
